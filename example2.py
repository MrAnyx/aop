class TransactionHandler(object):
    def wrap(self, func):
        def wrapper(*args, **kwargs): # Standard python varargs notation
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


# And later...
tx_handler = TransactionHandler()

@tx_handler.wrap
def save_into_db(value):
    # Verify that the data is correct.
    # In our case, it must be true, otherwise an error occurs
    if not value:
        raise ValueError("Must be true")
    else:
        print("Saving value") # Imagine we save this into database


save_into_db(value=False)