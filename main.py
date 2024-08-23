import os
import google.generativeai as genai
from dotenv import load_dotenv

# Load the environment variables from the .env file
load_dotenv()

# Set your API key from the .env file
api_key = os.getenv('GOOGLE_API_KEY')
genai.configure(api_key=api_key)

model = genai.GenerativeModel('gemini-1.5-flash')


response = model.generate_content("Por favor, em português, escreva um paragrafo de texto analisando o seguinte cenário: Um empreendedor francisco, usuario da stone, quer aumentar seu lucro cada vez mais e tem uma pequena padaria local, forneça insights sobre como ele pode aumentar seu lucro")
print(response.text)
