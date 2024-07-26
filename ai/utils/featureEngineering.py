import pandas as pd

def create_features(data):
    # Example feature engineering steps
    data['balance_to_income_ratio'] = data['balance'] / data['income']
    return data
