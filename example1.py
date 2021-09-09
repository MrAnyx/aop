# Basically, a decorator is a function that returns a function.
# They usually take another function as argument, however, and wrap the latter
# with some behavior.

# Create our decorator
def simple_decorator(func):
    # This is were your neurons should start heating up...
    def wrapper():
        """Prints "before" and "after" around `func`"""
        print("before")
        func()
        print("after")

    return wrapper

# Still alive? See, was easy ;)
# All we did is create a function that call the given `func`,
# and return this new function

# Now decorate a function with the '@' sign
@simple_decorator
def test():
    print("inside")

test()