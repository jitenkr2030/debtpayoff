from transformers import GPT2LMHeadModel, GPT2Tokenizer
import torch

class ChatbotModel:
    def __init__(self):
        self.tokenizer = GPT2Tokenizer.from_pretrained('gpt2')
        self.model = GPT2LMHeadModel.from_pretrained('gpt2')

    def generate_response(self, prompt):
        inputs = self.tokenizer.encode(prompt, return_tensors='pt')
        outputs = self.model.generate(inputs, max_length=200, num_return_sequences=1)
        return self.tokenizer.decode(outputs[0], skip_special_tokens=True)

if __name__ == "__main__":
    chatbot = ChatbotModel()
    response = chatbot.generate_response("How can I manage my debt better?")
    print(response)
