import numpy as np
import pandas as pd
from sklearn.linear_model import LogisticRegression
from joblib import dump, load

class DebtStrategyModel:
    def __init__(self):
        self.model = LogisticRegression()

    def train(self, X, y):
        self.model.fit(X, y)
        dump(self.model, 'debt_strategy_model.joblib')

    def predict(self, X):
        model = load('debt_strategy_model.joblib')
        return model.predict(X)

    def evaluate(self, X, y):
        model = load('debt_strategy_model.joblib')
        return model.score(X, y)

if __name__ == "__main__":
    # Example training data
    data = pd.read_csv('debt_strategy_data.csv')
    X = data.drop(columns=['strategy'])
    y = data['strategy']

    model = DebtStrategyModel()
    model.train(X, y)
    print("Model trained and saved.")
