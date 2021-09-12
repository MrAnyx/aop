
def simple_decorator(func):
    def wrapper():
        print("before")
        func()
        print("after")

    return wrapper

@simple_decorator
def test():
    print("inside")

test()