from ai.models.debtStrategyModel import DebtStrategyModel
from ai.models.predictiveAnalyticsModel import PredictiveAnalyticsModel
from ai.utils.dataPreprocessing import preprocess_data

def train_debt_strategy_model():
    data = preprocess_data('data/debt_strategy_data.csv')
    X = data.drop(columns=['strategy'])
    y = data['strategy']
    model = DebtStrategyModel()
    model.train(X, y)
    print("Debt strategy model trained.")

def train_predictive_analytics_model():
    data = preprocess_data('data/income_expense_data.csv')
    X = data.drop(columns=['expense'])
    y = data['expense']
    model = PredictiveAnalyticsModel()
    model.train(X, y)
    print("Predictive analytics model trained.")

if __name__ == "__main__":
    train_debt_strategy_model()
    train_predictive_analytics_model()
