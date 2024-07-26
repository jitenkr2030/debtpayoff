import pandas as pd

def preprocess_data(file_path):
    data = pd.read_csv(file_path)
    # Example preprocessing steps
    data.fillna(0, inplace=True)
    data = pd.get_dummies(data)
    return data
