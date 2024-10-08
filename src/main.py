import os
from openai import OpenAI
from dotenv import load_dotenv

# Load environment variables from a .env file
load_dotenv()

# Retrieve your OpenAI API key from the environment variables
openai_key = os.getenv('OPENAI_API_KEY')

# Initialize the OpenAI client
client = OpenAI(api_key=openai_key)

# Initial chat log with a system message
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

# Example usage
ask_gpt('Computei hoje uma venda de 200 reais e ontem uma de 600 reais')



ask_gpt('Quanto lucrei entre ontem e hoje?')
