import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from joblib import dump, load

class PredictiveAnalyticsModel:
    def __init__(self):
        self.model = RandomForestRegressor()

    def train(self, X, y):
        self.model.fit(X, y)
        dump(self.model, 'predictive_analytics_model.joblib')

    def predict(self, X):
        model = load('predictive_analytics_model.joblib')
        return model.predict(X)

    def evaluate(self, X, y):
        model = load('predictive_analytics_model.joblib')
        return model.score(X, y)

if __name__ == "__main__":
    # Example training data
    data = pd.read_csv('income_expense_data.csv')
    X = data.drop(columns=['expense'])
    y = data['expense']

    model = PredictiveAnalyticsModel()
    model.train(X, y)
    print("Model trained and saved.")
