from ai.models.debtStrategyModel import DebtStrategyModel
from ai.models.predictiveAnalyticsModel import PredictiveAnalyticsModel
from ai.utils.dataPreprocessing import preprocess_data

def evaluate_debt_strategy_model():
    data = preprocess_data('data/debt_strategy_data.csv')
    X = data.drop(columns=['strategy'])
    y = data['strategy']
    model = DebtStrategyModel()
    score = model.evaluate(X, y)
    print(f"Debt strategy model accuracy: {score}")

def evaluate_predictive_analytics_model():
    data = preprocess_data('data/income_expense_data.csv')
    X = data.drop(columns=['expense'])
    y = data['expense']
    model = PredictiveAnalyticsModel()
    score = model.evaluate(X, y)
    print(f"Predictive analytics model accuracy: {score}")

if __name__ == "__main__":
    evaluate_debt_strategy_model()
    evaluate_predictive_analytics_model()
