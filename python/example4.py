def capitalize_names(func):
    def func_wrapper(*args, **kwargs):
        return func(*args, **kwargs).upper()
    return func_wrapper

def lump_names(func):
    def func_wrapper(*args, **kwargs):
        return '@' + func(*args, **kwargs).replace(', ', '')
    return func_wrapper

@lump_names
@capitalize_names
def get_fullname(firstname, lastname):
    return "{}, {}".format(lastname, firstname)
   

print(get_fullname("John", "Doe"))