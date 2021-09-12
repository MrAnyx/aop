class TransactionHandler(object):
    def wrap(self, func):
        def wrapper(*args, **kwargs):
            self.start_transaction()
            try:
                func(*args, **kwargs)
                self.commit_transaction()
            except Exception as e:
                self.rollback_transaction()
                raise e

        return wrapper

    def start_transaction(self):
        print("Starting transaction")

    def commit_transaction(self):
        print("Commit")

    def rollback_transaction(self):
        print("Rollback")


tx_handler = TransactionHandler()


@tx_handler.wrap
def save_into_db(value):
    if not value:
        raise ValueError("Must be true")
    else:
        print("Saving value")


save_into_db(value=True)
