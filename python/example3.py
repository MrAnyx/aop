def capitalize_names(func):
    def func_wrapper(*args, **kwargs):
        return func(*args, **kwargs).upper()

    return func_wrapper


@capitalize_names
def get_fullname(firstname, lastname):
    return "{}, {}".format(lastname, firstname)


class Person:
    def __init__(self):
        self.firstname = "John"
        self.lastname = "Doe"

    @capitalize_names
    def get_fullname(self):
        return "{}, {}".format(self.lastname, self.firstname)


print(get_fullname("John", "Doe"))


my_person = Person()
print(my_person.get_fullname())  # same result as above
