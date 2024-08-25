import os
import uuid

import openai
import requests
import soundfile as sf

from config import config

openai.api_key = config.OPENAI_API_KEY

chat_log = [
    {"role": "system", "content": "Você é um assistente financeiro chamado Toni, que reunirá informações sobre pequenos e médios empreendedores e ajudará eles com suas finanças pessoais."},
]


def ask_gpt(question):
    # Add the user's question to the chat log
    chat_log.append({"role": "user", "content": question})

    # Create a stream for the response from the assistant
    stream = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=chat_log,
        stream=True,
    )
    
    # Initialize a variable to store the assistant's response
    assistant_response = ""
    
    # Process each chunk in the stream
    for chunk in stream:
        if chunk.choices[0].delta.content is not None:
            # Append each part of the response to the assistant_response variable
            assistant_response += chunk.choices[0].delta.content
            print(chunk.choices[0].delta.content, end="")

    # Add the assistant's response to the chat log
    chat_log.append({"role": "assistant", "content": assistant_response})

    return assistant_response
    
def transcript_audio(media_url: str) -> dict:
    try:
        ogg_file_path = f'{config.OUTPUT_DIR}/{uuid.uuid1()}.ogg'
        data = requests.get(media_url)
        with open(ogg_file_path, 'wb') as file:
            file.write(data.content)
        audio_data, sample_rate = sf.read(ogg_file_path)
        mp3_file_path = f'{config.OUTPUT_DIR}/{uuid.uuid1()}.mp3'
        sf.write(mp3_file_path, audio_data, sample_rate)
        audio_file = open(mp3_file_path, 'rb')
        os.unlink(ogg_file_path)
        os.unlink(mp3_file_path)
        transcript = openai.Audio.transcribe(
            'whisper-1', audio_file, api_key=config.OPENAI_API_KEY)
        return {
            'status': 1,
            'transcript': transcript['text']
        }
    except Exception as e:
        print('Error at transcript_audio...')
        print(e)
        return {
            'status': 0,
            'transcript': transcript['text']
        }
    