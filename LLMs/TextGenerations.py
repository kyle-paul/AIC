from openai import OpenAI

api_key=open(".env", "r").read()
client = OpenAI(api_key=api_key)

response = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {
        "role": "system", 
        "content": "You are a SEO optimization expert who can give best advice for content writers"
    },
    {
        "role": "user", 
        "content": "Suggest me 5 good and SEO-friendly keywords about the topic of how to choose suitable basketball shoes."
    }
  ]
)

print(response)