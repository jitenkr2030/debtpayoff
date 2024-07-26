from ai.models.debtStrategyModel import DebtStrategyModel
from ai.models.predictiveAnalyticsModel import PredictiveAnalyticsModel
from ai.utils.dataPreprocessing import preprocess_data

def update_debt_strategy_model():
    data = preprocess_data('data/new_debt_strategy_data.csv')
    X = data.drop(columns=['strategy'])
    y = data['strategy']
    model = DebtStrategyModel()
    model.train(X, y)
    print("Debt strategy model updated.")

def update_predictive_analytics_model():
    data = preprocess_data('data/new_income_expense_data.csv')
    X = data.drop(columns=['expense'])
    y = data['expense']
    model = PredictiveAnalyticsModel()
    model.train(X, y)
    print("Predictive analytics model updated.")

if __name__ == "__main__":
    update_debt_strategy_model()
    update_predictive_analytics_model()
