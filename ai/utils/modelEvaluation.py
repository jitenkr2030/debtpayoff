from sklearn.metrics import accuracy_score, mean_squared_error

def evaluate_classification_model(model, X_test, y_test):
    y_pred = model.predict(X_test)
    return accuracy_score(y_test, y_pred)

def evaluate_regression_model(model, X_test, y_test):
    y_pred = model.predict(X_test)
    return mean_squared_error(y_test, y_pred)
