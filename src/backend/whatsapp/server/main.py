from flask import Flask, request

from whatsapp.helper.gpt import ask_gpt, transcript_audio
from whatsapp.helper.twilio import send_message
from openai import OpenAI

from config import config

app = Flask(__name__)

client = OpenAI(api_key=config.OPENAI_API_KEY)

@app.route('/', methods=['GET', 'POST'])
def home():
    return 'OK', 200

@app.route('/twilio', methods=['POST'])
def twilio():
    try:
        data = request.form.to_dict()
        print(data)
        query = data['Body']
        sender_id = data['From']
        print(f'Sender id - {sender_id}')
        if 'MediaUrl0' in data.keys():
            transcript = transcript_audio(data['MediaUrl0'], client)
            if transcript['status'] == 1:
                print(f'Query - {transcript["transcript"]}')
                response = ask_gpt(transcript['transcript'],client)
            else:
                response = config.ERROR_MESSAGE
        else:
            print(f'Query - {query}')
            response = ask_gpt(query,client)
        print(f'Response - {response}')
        send_message(sender_id, response)
        print('Message sent.')
    except Exception as e:
        print(e)

    return 'OK', 200