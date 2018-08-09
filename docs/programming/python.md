# Python

---

## Classes

```python
class c1:
   # class attrbitues are defaults for object attributes
  att1 = 'Nada'
  att3 = 'Beauty'

  def __init__(self):
    c1.att2 = 22  # class attribute
    self.att2 = 22  # object attribute overwriten

  def m1(self):
    c1.att1 = "hey"  # class attribute
    print self.att1  # object attrbute
    self.att1 = 'heyhey!'

  @classmethod
  def cm2(klass, str0):
    print str0
    print klass.att1
    print c1.att3
    print c1==klass

  @staticmethod
  def sm3(str0):
    print str0

```

### Static Method

Can be used/ran without instantiating the class into an object. Static methods have no access to class attributes.
```python
# running static method, without object, and without having access to class attributes
c1.sm3('yoyoyo')
```

### Class Method

Can be used/ran without instantiating the class into an object. Class methods do have access to class attributes.

```python
# running class method, without object, and having access to class attributes
c1.cm2('heelo')
```

### Licenses
```python
import pkg_resources
import prettytable

def get_pkg_license(pkg):
    try:
        lines = pkg.get_metadata_lines('METADATA')
    except:
        lines = pkg.get_metadata_lines('PKG-INFO')

    for line in lines:
        if line.startswith('License:'):
            return line[9:]
    return '(Licence not found)'

def print_packages_and_licenses():
    t = prettytable.PrettyTable(['Package', 'License'])
    for pkg in sorted(pkg_resources.working_set, key=lambda x: str(x).lower()):
        t.add_row((str(pkg), get_pkg_license(pkg)))
    print(t)


if __name__ == "__main__":
    print_packages_and_licenses()
```


### Simple Method

Can be used/ran after instantiating the class into an object. Simple methods have access to class attributes and object attributes

```python
O1 = c1()
o1.m1()
```


Data Types
----------

### String & Number

**Zero Pad Number:**

```python
>>> print(format(5, "05d"))
00005
>>> print(format(5, "02d"))
05
```

**Encode to ASCII**

```python
File.write(unicode\_str.encode('ascii', 'ignore'))
```

**Decimal print:**
```python
print('{:,.2f}'.format(s\['DL\_Sum'\] ))

print('${:,.2f}'.format(salary) ## currency
```

**Comma / Thousands Separator**
```python
print("{:,d}".format(12456789))
```


**Print in Grid:**
```python
print('{0:&lt;10}'.format(str(stats\[s\]\[h\])))
```

#### Regex

**All Matches:**
```python
m_arr = re.findall(r'[ ]*SET *[\w =,\n()]*WHERE', string1)
```

**Replace all matches:**
```python
obj_sql2 = re.sub(r",[\n ]+(?i)" + combo_name + r"[ \r*\n]+",  combo_name , string_sql2)
```
**Matches Excluding Suffix/Prefix:**
```python
r"(?<=Pay: )[- \w$\d]+"
r"(?<=Rate )[ \w$]+?(?= Job Type)"
```

**Replace non-numeric**
```python
result = re.sub('[^0-9]','', 'af7878787ad')
```

**Constains one char math**
```python
import re
word = 'fubar'
regexp = re.compile(r'[rzd]') # matches r, z or d
if regexp.search(word):
  print 'matched'
```

### YAML

```python
import yaml

def parse_yaml(file_path):
  with open(file_path, 'r') as stream:
    data = yaml.load(stream)
    return dict(data)

data = parse_yaml(r'C:\path\file.yml')

with open(r'C:\path\file2.yml', 'w') as outfile:
    yaml.dump(data, outfile, default_flow_style=False)
```

### JSON

**STDin JSON Tool**
```
curl http://localhost:3000/stats | python -m "json.tool"
```

**Dict to JSON String**
```python
import json

print(json.dumps(data_dict))
```

**JSON String to Dict**
```python
import json
print(json.loads(json_str))
```

**Good Library: jmespath**
```
pip install jmespath
```

<https://jmespath.readthedocs.io/en/latest/specification.html#index-expressions>
<https://pypi.python.org/pypi/jmespath>

```python
data = {}
jmespath.search('result.periods', data)
jmespath.search('result.opening_hours.periods[0]', data)
jmespath.search('result.opening_hours.periods[0].close', data)
jmespath.search('result.opening_hours.periods[*].close.time', data)
```


#### Get Unique nested keys
```python
all_paths = {}
def get_unique_keys(data, parent_path=''):
  if isinstance(data, dict):
    for key, data2 in data.items():
      get_unique_keys(data2, key if parent_path == '' else parent_path + '.' + key)
  elif isinstance(data, list):
    for data2 in data:
      get_unique_keys(data2, parent_path + '[*]')
  else:
    all_paths[parent_path] = all_paths.get(parent_path,0) + 1

get_unique_keys(data_dict)
for path in sorted(all_paths):
  print('{} --> {}'.format(path, all_paths[path]))
```

### Counter
**Get unique values and occurence**
```python
for combo, field_count in Counter([row.combo1 for row in data_columns]).items()
```

### Dictionary

```python
Headers = {}
headers = {
  'Content-type': 'application/json'
}
```
```python
for key, value in headers.iteritems(): 
   print(key + ' ' + values)
```

**Delete:**

```python
del dict[key]
```

**Sorted by key:**

```python
top_repo = sorted(all_repos, key=lambda x: x['stargazers_count'], reverse=True)[0]
```

**Sorted by Value:**

```python
for key in sorted(dict1, key=dict1.get)
```

**Merge:**

```python
new_dict = dict(x.items() + y.items())
new_dict = dict(x, **y)
```

**Build from list:**

<http://stackoverflow.com/questions/209840/map-two-lists-into-a-dictionary-in-python>

```python
import itertools
file_lines = read_from_file(file_path).splitlines()
file_lines[0] = deli.join([f.lower() for f in file_lines[0].split(deli)])
result_data = [dict(itertools.izip(file_lines[0].split(deli), line.split(deli))) for line in file_lines[1:]]

keys = ('name', 'age', 'food')
values = ('Monty', 42, 'spam')
dict(zip(keys, values))
{'food': 'spam', 'age': 42, 'name': 'Monty'}

```

#### JMESpath Search
```python
In [218]: d = dict(a=dict(b=[1,2]), c=[dict(d=3), dict(d=3)])

In [219]: d
Out[219]: {'a': {'b': [1, 2]}, 'c': [{'d': 3}, {'d': 3}]}

In [220]:  jmespath.search('PolicyTransactionMessage.PolicyTransaction.Details', d)

In [221]:  jmespath.search('a', d)
Out[221]: {'b': [1, 2]}

In [222]:  jmespath.search('a.b', d)
Out[222]: [1, 2]

In [223]:  jmespath.search('a', d)
Out[223]: {'b': [1, 2]}

In [224]:  jmespath.search('c', d)
Out[224]: [{'d': 3}, {'d': 3}]

In [225]:  jmespath.search('c[0]', d)
Out[225]: {'d': 3}

In [226]:  jmespath.search('c[*]', d)
Out[226]: [{'d': 3}, {'d': 3}]

In [227]:  jmespath.search('a.*', d)
Out[227]: [[1, 2]]

```

```python
class DictTree:
  def __init__(self, data, header_only=False, name_processor=None):
    self.data = data
    self.name_processor = name_processor
    self.get_keys_path(header_only=header_only)
    self.TRow = namedtuple('TRow', 'title action field_name field_type depth_level field_path is_null is_list len')

  def get_keys_path(self, header_only=False):
    "Traverses nested dictionary and returns depth level and corresponding JMESPath search string"
    # http://jmespath.org/specification.html#examples
    # https://github.com/jmespath/jmespath.py
    from pyspark.sql import Row
    fields_parent = OrderedDict()
    DP = namedtuple('DictPath', 'level key path vtype field_name')
    name_processor = self.name_processor if self.name_processor else None

    def get_data_type(val):
      if isinstance(val, dict): return 'dict'
      if isinstance(val, list): return 'list'
      try: float(val) ; return 'number'
      except:
        try: dateutil.parser.parse(val) ; return 'datetime'
        except: return 'string'
    
    def get_field_name(key, parent):
      prefix = ''
      parent = parent.replace('"', '')

      if (parent.endswith('[*]') and len(parent.split('.')) > 1) or \
          (parent.endswith('[*]') and not parent.startswith('[*]')):
        prefix = parent.replace('[*]', '').split('.')[-1] + '_'
      
      if name_processor:
        prefix = name_processor(prefix)
        key = name_processor(key)
      
      f_name_new = f_name = prefix + key
      i = 0
      while f_name_new in fields_parent and fields_parent[f_name_new] != parent:
        i+=1
        f_name_new = f_name + str(i)
      fields_parent[f_name_new] = parent
      return f_name_new
        
    q = lambda s: '"' + s + '"'
    def get_paths(d1, level=1, parent=''):
      kks = set()

      if isinstance(d1, dict):
        if "Header" in d1:
          keys = ["Header"] + [k for k in d1 if k != "Header"]
        else:
          keys = list(d1)
        for key in keys:
          if key.startswith('@'): continue
          vt = get_data_type(d1[key])
          field_name = get_field_name(key, parent) if vt not in ('dict', 'list') else None
          path = '{}{}'.format(parent + '.' if parent else '', q(key))
          kks.add(DP(level, key, path, vt, field_name))
          kks = kks.union(get_paths(d1[key], level=level+1, parent=path))
          if header_only and key == "Header": return kks
      elif isinstance(d1, list):
        key = '[*]'
        path = '{}{}'.format(parent if parent else '', key)
        if level==1:
          kks.add(DP(level, key, path, vt, None))
        for item in d1:
          kks = kks.union(get_paths(item, level=level+1, parent=path))

      return kks
    
    self.paths = sorted(get_paths(self.data))
    self.v_paths = [r for r in self.paths if r.vtype not in ('dict', 'list')]
    self.v_lists = [r for r in self.paths if r.vtype in ('list')]
    self.fields = [r.field_name for r in self.paths if r.vtype not in ('dict', 'list')]
    self.fields_dict = {r.field_name: r for r in self.paths if r.vtype not in ('dict', 'list')}
    self.Rec = Row(*self.fields)

    try:
      self.title = list(self.data)[0]
      self.action = self.get_value('Action', conv_date=False)
    except:
      pass

    return self.paths

  def search(self, path):
    from jmespath import search
    return search(path, self.data)
  
  def get_value(self, field, conv_date=True):
    val = self.search(self.fields_dict[field].path)
    if conv_date and self.fields_dict[field].vtype == 'date':
      try: val = dateutil.parser.parse(val)
      except: pass
    return val
  
  def get_field_table(self):
    "Create fields table"
    t_rows = []
    for field in self.fields:
      val = self.get_value(field)
      rec = dict(
        title=self.title,
        action=self.action,
        field_name=field,
        field_type=self.fields_dict[field].vtype,
        depth_level=self.fields_dict[field].level,
        field_path=self.fields_dict[field].path,
        is_null=0 if str(val).strip() else 1,
        is_list=1 if isinstance(val, list) else 0,
        len=len(str(val)),
      )
      
      t_rows.append(self.TRow(**rec))
    return t_rows
  
  def get_record(self):
    "Returns one record, omitting lists N:N relationships"
    return self.Rec(*[self.get_value(f) for f in self.fields])

```

### Pandas

- Dataframe: :http://pandas.pydata.org/pandas-docs/stable/api.html#dataframe>
  - Serialization / IO / Conversion: <http://pandas.pydata.org/pandas-docs/stable/api.html#id12>
  
- Iterate over dataFrame:
  - df.itertuples() - namedtuples
  - df.iterrows() - dicts
- CSV Interaction:
  - df.to_csv(fileName): <http://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.to_csv.html>
  - pandas.read_csv(fileName): <http://pandas.pydata.org/pandas-docs/stable/generated/pandas.read_csv.html>



### Array

<https://docs.python.org/2/library/array.html>

Arrays are 10x more efficient than lists.

| **Type code** | **C Type**     | **Python Type**   | **Minimum size in bytes** |
|---------------|----------------|-------------------|---------------------------|
| 'c'           | char           | character         | 1                         |
| 'b'           | signed char    | int               | 1                         |
| 'B'           | unsigned char  | int               | 1                         |
| 'u'           | Py\_UNICODE    | Unicode character | 2 (see note)              |
| 'h'           | signed short   | int               | 2                         |
| 'H'           | unsigned short | int               | 2                         |
| 'i'           | signed int     | int               | 2                         |
| 'I'           | unsigned int   | long              | 2                         |
| 'l'           | signed long    | int               | 4                         |
| 'L'           | unsigned long  | long              | 4                         |
| 'f'           | float          | float             | 4                         |
| 'd'           | double         | float             | 8                         |

```python
import array
data_array = array.array('i', range(size))
data_array[0] = 1
data_array[1] = 2
```

### List

```python
data_array = []
value = 0.1
data_array.append(value)
size = len(data_array)

for value in data_array:
  print(value)

```



### Tuple vs List

**BOTTOM LINE: **

-   **If array of items will never be changed (no appending and no change of inner-item), use Tuple**

-   **If array of items will require lots of changes (many appends or change of inner-item), use List**

**Performance**

Python makes this very easy: timeit is your friend.

```python
python -m timeit -s "x=(1,2,3,4,5,6,7,8)"
100000000 loops, best of 3: 0.017 usec per loop

python -m timeit -s "x=[1,2,3,4,5,6,7,8]"
100000000 loops, best of 3: 0.0143 usec per loop

```

and...
```python
$ python -m timeit -s "x=(1,2,3,4,5,6,7,8)" "y=x[3]"
10000000 loops, best of 3: 0.0938 usec per loop

$ python -m timeit -s "x=[1,2,3,4,5,6,7,8]" "y=x[3]"
10000000 loops, best of 3: 0.0649 usec per loop

```


So in this case, instantiation is almost an order of magnitude faster for the tuple, but item access is actually somewhat faster for the list! So if you're creating a few tuples and accessing them many many times, it may actually be faster to use lists instead.

Of course if you want to change an item, the list will definitely be faster since you'd need to create an entire new tuple to change one item of it (since tuples are immutable).



### Mutable/Immutable

```python
x = something # immutable type
print x
func(x)
print x # prints the same thing

x = something # mutable type
print x
func(x)
print x # might print something different

x = something # immutable type
y = x
print x
# some statement that operates on y
print x # prints the same thing

x = something # mutable type
y = x
print x
# some statement that operates on y
print x # might print something different
```

The value of mutable objects can be changed after they are created.

Immutable objects are fundamentally expensive to "change", because doing so involves creating a copy, hence the creation of a new object (as shown below).

Changing mutable objects is cheap.

**Strings are immutable:**

```python
>>> a = 'h'
>>> id(a)
46448768L
>>> a += 'g'
>>> a
'hg'
>>> id(a)
47561744L
```

**Numbers are immutable:**
```python
>>> a = 1
>>> id(a)
36478936L
>>> a += 1
>>> a
2
>>> id(a)
36478912L

>>> a = 5.6
>>> id(a)
36539176L
>>> a += 6.0
>>> a
11.6
>>> id(a)
36539224L


```

**Tuple are Immutable**
```python
>>> a = (1,2)
>>> id(a)
46922376L
>>> a = a + (2,)
>>> a
(1, 2, 2)
>>> id(a)
47525608L


```

**Lists are Mutable**

```python
>>> a = [1]
>>> id(a)
47533064L
>>> a.append('1')
>>> id(a)
47533064L
```

**Dicts are Mutable**
```python
>>> a = {'a': 2}
>>> id(a)
47578376L
>>> a['d'] = 4
>>> a
{'a': 2, 'd': 4}
>>> id(a)
47578376L
```

### Copying Objects

**Mutable Custom Objects**

```python
import copy

newobj = copy.copy(oldobj) # shallow copy
newobj = copy.deepcopy(oldobj) # deep (recursive) copy
```

**Dicts**
```python
newdict = olddict.copy()
new_dict = dict(olddict) # copy
```

**List**

```python
new_list = L[:]
new_list = list(L) # copy
```

**Set**

```python
new_set = set(L) # convert list to set
```

#### Deep Copy VS Shallow Copy

```python
import copy

a = [1, 2, 3]
b = [4, 5, 6]
c = [a, b]

```

**Using normal assignment operatings to copy:**

```python
d = c

print id(c) == id(d)          # True - d is the same object as c
print id(c[0]) == id(d[0])    # True - d[0] is the same object as c[0]

```

**Using a shallow copy:**

```python
d = copy.copy(c)
print id(c) == id(d)          # False - d is now a new object
print id(c[0]) == id(d[0])    # True - d[0] is the same object as c[0]

```

**Using a deep copy:**

```python
d = copy.deepcopy(c)
print id(c) == id(d)          # False - d is now a new object
print id(c[0]) == id(d[0])    # False - d[0] is now a new object
```

### Performance Times

**Way to measure**
```python
def test1(times = 100):
  def test_unit():
    pass
  
  def t():
    t0 = time.perf_counter()
    test_unit()
    return time.perf_counter() - t0

  results = [t() for i in range(times)]
  print(sum(results) / len(results)

```

```python



import timeit


setup_tuple = '''
headers = [f'col_{i}' for i in range(256)]
'''
res_tuple = min(timeit.Timer('headers', setup=setup_tuple).repeat(7, 10000))

setup_pyspark = '''
from pyspark.sql import Row
headers = [f'col_{i}' for i in range(252)]
Rec = Row(headers)
'''
res_pyspark = min(timeit.Timer('rec = Rec(*headers)', setup=setup_pyspark).repeat(7, 10000))


setup_nt = '''
from collections import namedtuple
headers = [f'col_{i}' for i in range(255)]
Rec = namedtuple("rec", headers)
'''
res_nt = min(timeit.Timer('rec = Rec(*headers)', setup=setup_nt).repeat(7, 10000))

setup_kt = '''
from sqlalchemy.util import KeyedTuple
headers = [f'col_{i}' for i in range(252)]
'''
res_kt = min(timeit.Timer("rec = KeyedTuple(headers, labels=headers)", setup=setup_kt).repeat(7, 10000))

setup_po = '''
import plain_obj
headers = [f'col_{i}' for i in range(252)]
Rec = plain_obj.new_type('Rec', headers)
'''
res_po = min(timeit.Timer("rec = Rec(*headers)", setup=setup_po).repeat(7, 10000))

setup_rec = '''
headers = [f'col_{i}' for i in range(252)]
class Rec:
  def __init__(self, fields, values):
    for i, field in enumerate(fields):
      setattr(self, field, values[i])
'''
res_rec = min(timeit.Timer("Rec(headers, headers)", setup=setup_rec).repeat(7, 10000))

print(f'''
PySPark Row: {res_pyspark}
NamedTuple:  {res_nt}
KeyedTuple:  {res_kt}
plain_obj:  {res_po}
res_tuple:  {res_tuple}
''')
```


Smaller is better, three level: &lt;, &lt;&lt;, &lt;&lt;&lt;

**If Order is not priority, use** dict **keys to store data, *as they write/append much faster* and *read as fast as list*.**

**declare dict = declare list**

```python
python -m timeit -s "a = {'a':2} "
100000000 loops, best of 3: 0.0143 usec per loop

python -m timeit -s "a = ['a'] "
100000000 loops, best of 3: 0.0145 usec per loop
```

**read from list &lt; read from dict**

```python
python -m timeit -s "a = ['a'] " "a[0]"
10000000 loops, best of 3: 0.0309 usec per loop

python -m timeit -s "a = {'a':2} " "a['a']"
10000000 loops, best of 3: 0.0364 usec per loop
```

**write to dict &lt;&lt; append to list**

```python
python -m timeit -s "a = {} " "a['a'] = 1" "a['b'] = 1" "a['c'] = 1" "a['d'] = 1"
1000000 loops, best of 3: 0.224 usec per loop

python -m timeit -s "a = [] " "a.append('a')" "a.append('a')" "a.append('a')" "a.append('a')"
1000000 loops, best of 3: 0.414 usec per loop
```

**Iterating lists &lt;&lt; xrange**

```python
python -m timeit -s "x=[1,2,3,4,5,6,7,8]" "for i in x: i"
1000000 loops, best of 3: 0.292 usec per loop

python -m timeit -s "x=[1,2,3,4,5,6,7,8]" "for i in xrange(len(x)): x[i]"
1000000 loops, best of 3: 0.525 usec per loop
```

**Iterating tuple = iterating lists**

```python
python -m timeit -s "x=[1,2,3,4,5,6,7,8]" "for i in x: i"
1000000 loops, best of 3: 0.292 usec per loop

python -m timeit -s "x=(1,2,3,4,5,6,7,8)" "for i in x: i"
1000000 loops, best of 3: 0.254 usec per loop

```

**Iterating lists &lt;&lt; iterating dict values**

```python
python -m timeit -s "x=[1,2,3,4,5,6,7,8]" "for i in x: i"
1000000 loops, best of 3: 0.292 usec per loop

python -m timeit -s "x={'a':1,'b':2,'c':3,'d':4,'e':5,'f':6,'i':7,'j':8}" "for i in x: x[i]"
1000000 loops, best of 3: 0.472 usec per loop

python -m timeit -s "x={'a':1,'b':2,'c':3,'d':4,'e':5,'f':6,'i':7,'j':8}" "for i in x: i"
1000000 loops, best of 3: 0.266 usec per loop
```

**Dict lookup &lt;&lt; list lookup**

```python
python -m timeit -s "x={'a':1,'b':2,'c':3,'d':4,'e':5,'f':6,'i':7,'j':8}" "'a' in x"
10000000 loops, best of 3: 0.0558 usec per loop

python -m timeit -s "x=[1,2,3,4,5,6,7,8]" "1 in x"
10000000 loops, best of 3: 0.0628 usec per loop

python -m timeit -s "x=[1,2,3,4,5,6,7,8]" "8 in x"
1000000 loops, best of 3: 0.29 usec per loop

python -m timeit -s "x={'a':1,'b':2,'c':3,'d':4,'e':5,'f':6,'i':7,'j':8}" "'b' in x"
10000000 loops, best of 3: 0.058 usec per loop

python -m timeit -s "x={'a':1,'b':2,'c':3,'d':4,'e':5,'f':6,'i':7,'j':8}" "'j' in x"
10000000 loops, best of 3: 0.049 usec per loop
```

### Sorting

**Sorting Dict by value**

<http://stackoverflow.com/questions/613183/sort-a-python-dictionary-by-value>

```python
for path_ in sorted(paths.items(), key=lambda x: x[1], reverse=True):
        path = path_[0]
        print path + ' [' + str(paths[path])
```
## Collections

https://docs.python.org/3/library/collections.html

| Collection   | Desciption                                                           | 
|--------------|----------------------------------------------------------------------| 
| namedtuple() | factory function for creating tuple subclasses with named fields     | 
| deque        | list-like container with fast appends and pops on either end         | 
| ChainMap     | dict-like class for creating a single view of multiple mappings      | 
| Counter      | dict subclass for counting hashable objects                          | 
| OrderedDict  | dict subclass that remembers the order entries were added            | 
| defaultdict  | dict subclass that calls a factory function to supply missing values | 
| UserDict     | wrapper around dictionary objects for easier dict subclassing        | 
| UserList     | wrapper around list objects for easier list subclassing              | 
| UserString   | wrapper around string objects for easier string subclassing          | 

## Path
```python
from pathlib import Path

dataset = 'wiki_images'
datasets_root = Path('/path/to/datasets/')

train_path = datasets_root / dataset / 'train'
test_path = datasets_root / dataset / 'test'

for image_path in train_path.iterdir():
    with image_path.open() as f: # note, open is a method of Path object
        # do something with an image
```

## Date


### SQL Datetime

```python
sql_date = time.strftime('%Y-%m-%d %H:%M:%S')

start_time = time.time()
end_time = time.time()
delta_time = end_time - start_time
```

### Operations

```python
>>> import datetime
>>> s = '04/21/2013'
>>> d = datetime.datetime.strptime(s, '%m/%d/%Y') + datetime.timedelta(days=1)
packet['time'] = datetime.datetime.strptime(' '.join(part1_arr[0:2]), '%Y-%m-%d %H:%M:%S.%f')
>>> print d.strftime('%m/%d/%Y')
04/22/2013

date_1 = datetime.datetime.strptime(start_date, "%m/%d/%y")
date_today = datetime.datetime.now().now()

posting_date = datetime.datetime.now().now() - datetime.timedelta(days=int(posting_date_offset))
self.posting_date = posting_date.strftime('%Y-%m-%d')
```

### Convert to UTC

```python
utc_delta = datetime.datetime.utcnow() - datetime.datetime.now()
time_in_utc = datetime.datetime.now() + datetime.timedelta(seconds=round(utc_delta.total_seconds()))
```

File Read/Write
---------------

### Read

```python
with open("/tmp/mining/test.txt", "rb") as fileobj:
    for line in fileobj:
        line = line.rstrip()

```

**Read whole file**

```python
with open('Path/to/file', 'r') as content_file:
    content = content_file.read()

```

**Convert to Ascii**
```python
lines0 = open(file_path,'rb').read()
lines = lines0.decode('utf-16-le').encode('ascii', 'ignore')

```

#### XML

<http://lxml.de/tutorial.html>

```python
import os, lxml
from lxml import etree

# open xml
xml_file_path = "/tmp/s_email.xml"
xml_tree = etree.parse(xml_file_path)

output_file_path = '/tmp/data_files'

data_row = {}
headers_order = [
    'FOLDER',
    'TYPE',
    'DATABASETYPE',
    'DBDNAME',
    'OWNERNAME',
    'NAME',
    'FIELDNUMBER',
    'FIELDNAME',
    'DATATYPE',
    'PRECISION',
    'KEYTYPE'
]

data_variables = {}
for header in headers_order:
    data_variables[header] = 'v_' + header

# for each FOLDER
for element in xml_tree.iter():
    print("%s - %s" % (element.tag, element.text))
    if element.tag == 'FOLDER': v_FOLDER = element['NAME']
    if element.tag in ('SOURCE','TARGET'): 
        v_TYPE = element.tag
        v_DATABASETYPE = element['DATABASETYPE']
        v_DBDNAME = element['DBDNAME']
        v_OWNERNAME = element['OWNERNAME']
        v_NAME = element['NAME']
    if element.tag in ('SOURCEFIELD','TARGETFIELD'): 
        v_FIELDNUMBER = element['FIELDNUMBER']
        v_FIELDNAME = element['FIELDNAME']
        v_PRECISION = element['PRECISION']
        v_KEYTYPE = element['KEYTYPE']
```

### Write

```python
# Write
# Open the File
target_file = open(target_file_path, 'w')

target_file.write(delimiter.join(line_text_array) + '\n')
target_file.close()

# Append
self.log_file = open(self.log_folder_path + '/informatica_python_log.txt', 'a')
```


#### XML

```python
def create_xml(self, jobs, folder_path = '/data/jobs_header'):

	root = etree.Element('AllJobs')

	for key, job in jobs.iteritems(): 
		# key is url, value is job_class
		print(key + ' ' + job)

		job_branch = etree.Element('job', url=job.url)

		# get all attributes
		atts = [a for a in dir(jobs) if not a.startswith('__') and not callable(getattr(jobs,a))] # gets all non-function attributes of object - self in this case
		# create sub-branch for each attribute
		for att in atts:
			code = "sub_branch = etree.Element('%s')" % (att)
			exec code

			code = "sub_branch.text = job.%s" % (att)
			exec code

			job_branch.append(sub_branch)

		root.append(job_branch)


	xml_body = etree.tostring(root, pretty_print=True)
	timestamp = "%.5f" % time.time()
	target_file_path = folder_path + '/' + self.class_name + timestamp + '.xml'
	SaveTexttoFile(xml_body.encode('utf-8'), target_file_path)
```

Random
------

### Numbers

```python
random.random()        # Random float x, 0.0 <= x < 1.0
0.37444887175646646

random.uniform(1, 10)  # Random float x, 1.0 <= x < 10.0
1.1800146073117523

random.randint(1, 10)  # Integer from 1 to 10, endpoints included
7

random.randrange(0, 101, 2)  # Even integer from 0 to 100
26

random.choice('abcdefghij')  # Choose a random element
'c'

items = [1, 2, 3, 4, 5, 6, 7]
random.shuffle(items)
items
[7, 3, 2, 5, 6, 4, 1]

random.sample([1, 2, 3, 4, 5],  3)  # Choose 3 elements
[4, 1, 5]
```

### Strings

```python
import string, random
N = 6
''.join(random.SystemRandom().choice(string.ascii_uppercase + string.digits) for _ in range(N))
```

### Unicode

**TypeError: Can't convert 'bytes' object to str implicitly**
```python
ascii_string = unicode_string.decode('utf8')
unicode_string = ascii_string.encode('utf8')

ascii_string = unicode_string.encode('ascii', errors='replace').decode('ascii')
```

FOR Loop
--------

### Range

```python
>>> # One parameter
>>> for i in range(5):
...     print(i)
... 
0
1
2
3
4
>>> # Two parameters
>>> for i in range(3, 6):
...     print(i)
... 
3
4
5
>>> # Three parameters
>>> for i in range(4, 10, 2):
...     print(i)
... 
4
6
8
>>> # Going backwards
>>> for i in range(0, -10, -2):
...     print(i)
... 
0
-2
-4
-6
-8
```

### Lambda

<http://www.secnetix.de/olli/Python/lambda_functions.hawk>

```python
transformation_types = [
    {
        "NAME":"Source Qualifier",
        "TABLEATTRIBUTE" : {
            "Sql Query": "",
            "User Defined Join":"",
            "Source Filter":"",
            "Number Of Sorted Ports":"0",
            "Tracing Level":"Normal",
            "Select Distinct":"NO",
            "Is Partitionable":"NO",
            "Pre SQL":"",
            "Post SQL":"",
            "Output is deterministic":"NO",
            "Output is repeatable":"Never"
        }
    },
    {
        "NAME":"Lookup Procedure",
        "TABLEATTRIBUTE" : {
            "Sql Query": "",
            "User Defined Join":"",
            "Source Filter":"",
            "Number Of Sorted Ports":"0",
            "Tracing Level":"Normal",
            "Select Distinct":"NO",
            "Is Partitionable":"NO",
            "Pre SQL":"",
            "Post SQL":"",
            "Output is deterministic":"NO",
            "Output is repeatable":"Never"
        }
    },
]

type = "Source Qualifier"
transformation_type_choices = [t["NAME"] for t in transformation_types]

filter(lambda t: t["NAME"] == type, transformation_types)[0]['TABLEATTRIBUTE']

atts = [a for a in dir(self) if not a.startswith('__') and not callable(getattr(self,a))]


```

<http://www.python-course.eu/lambda.php>

### List to Dict

```python
object_dict = dict((x, x) for x in object_list)
```

Database
--------

### SQL statement model

**For Insert / Replace**

```python
sql = """REPLACE INTO Reservations ({fields}) VALUES ({values})"""
sql = sql.format(fields=','.join(data), values=','.join(["'%s'"]*len(data))) % tuple(data.values())
db_target.query_cursor(sql)

```

**For Update**
```python
For Update
sql = '''UPDATE session_stats SET {set_fields} WHERE {where_fields}'''
sql = sql.format(set_fields=' = ?, '.join(session_hash) + ' = ?', where_fields=' = ? AND '.join(session_pk_fields) + ' = ?')
cursor.execute(sql, tuple(session_hash.values()) + tuple([session_hash[k] for k in session_pk_fields]))

```

**For MySQL**
```python
sql = """INSERT INTO db1.router_traffic (`{fields}`) VALUES ("{values}")""".format(fields='`,`'.join(record), values='","'.join(['%s']*len(record))) % tuple(record.values())



result = {
    "Sale_Rent": Sale_Rent_result,
    "Type": Type_result,
    "Area": area_result,
    "Nearby": nearby_result,
    "Title": title_result,
    "Price": price_result,
    "PricePerSqrFt": Pricepersq_result,
    "Bedroom": bedroom_result,
    "Agency_Fee": agencyfee_result,
    "Bathroom": bathroom_result,
    "Size": size_result,
    "ZonedFor": Zoned_for_result,
    "Freehold": Freehold_result,
    "Prop_ref": propertyref_result,
    "Furnished_status": furnished_result,
    "Rent_payment": rent_is_paid_result,
    "Building_info": building_result,
    "Amenities": Amenities_result,
    "Trade_name": tradename_result,
    "Licence": licencenum_result,
    "RERA_ID": reraid_result,
    "Phone_info": phone_result,
    "Short_link": link_result,
}

db= MySQLdb.connect("localhost","XXX","XXX","hmm_Raw_Data")
cursor=db.cursor()


#checking phase to stop scrapping


sql = """SELECT Short_link FROM RentalWanted WHERE Short_link=%s"""

rows = cursor.execute(sql,(result["Short_link"],))

if rows>=1:
    duplicate_count+=1
    print duplicate_count

    # if duplicate_count>=15:
    #   print "The program has started getting duplicates now- The program is terminating"
    #   sys.exit()
else:
    query = """INSERT INTO RentalWanted ("{fields}") VALUES ("{values}")"""
    query = query.format(fields='","'.join(result), values='","'.join(['%s']*len(result)))
    cursor.execute(query % tuple(result.values()))

db.commit()
cursor.close()
db.close()

```

#### For Postgres
```python
sql_upsert = '''
INSERT INTO {table} ({fields})
VALUES ({fields_values})
ON CONFLICT ({primary_key})
DO UPDATE
SET {fields_equal_key}
'''

no_space = lambda x: x.replace(' ', '_').replace('/','_').replace('-','_').replace('&','_')
q = lambda x: '"' + x + '"'

result = conn.execute(text(sql_upsert.format(
    table='schema.table',
    fields=','.join([q(no_space(h)) for h in headers]),
    fields_values=','.join([":" + no_space(h) for h in headers]),
    primary_key=','.join('"COL1" "COL1"'.split()),
    fields_equal_key=','.join([q(no_space(h)) + "=:" + no_space(h) for h in headers]),
  )), **record)

```

### Import from CSV
```python
import pandas as pd
df = pd.read_csv('mypath.csv')
df.columns = [c.lower() for c in df.columns]

from sqlalchemy import create_engine
engine = create_engine('postgresql://username:password@localhost:5432/dbname')

df.to_sql("fhrs", engine)

```


### Install MySQL Connector

**GO HERE:**
<https://dev.mysql.com/downloads/connector/python/>

**For Ubuntu**

Starting with a vanilla Lucid install \[1\], install pip and upgrade to the latest version:
```bash
apt-get install python-pip

pip install -U pip
```
Next, install the required development packages:
```bash
apt-get install -y python-dev libmysqlclient-dev gcc mysql-devel mysql-common mysql-libs

sudo apt-get install libmysqlclient-dev
```
OR
```bash
yum install -y python-devel mysql-devel

yum install -y mysql mysql-devel mysql-common mysql-libs gcc
```
then
```bash
pip install MySQL-python

pip install mysql-connector-python --allow-external mysql-connector-python
```
**Alternate**
```bash
git clone https://github.com/mysql/mysql-connector-python.git

cd mysql-connector-python

python ./setup.py build

sudo python ./setup.py install
```
### MongoDB

**Login**
```python
import pymongo

from pymongo import MongoClient

mongoDB = MongoClient('mongodb://router:router@localhost:27017/router')
```
**String Connection Config:**
```
mongodb://username:password@example.com:27017,example2.com:27017,...,example.comN:27017/database?key=value&keyN=valueN
\_____/   \_______________/ \_________/ \__/  \_______________________________________/ \______/ \_/ \___/
  |             |             |           |                    |                          |       |    |
Scheme          |            Host        Port        Alternative host identifiers         |      Key Value
             Userinfo       \_____________/                                               |      \_______/
                                   |                                              Auth database      |
                              Host Identifier                                                    Key Value Pair
                             \_______________________________________________________/          \___________________/
                                                      |                                                   |
                                                 Host Information                                  Connection Options

```


**Configuration for High Availability, ReplicaSet Load Balancing:**

<http://api.mongodb.org/python/current/examples/high_availability.html>

**Point to Collection**
```python
router_traffic = mongoDB.router.router_traffic
```


**Insert**
```python
result = router_traffic.insert_one(packet)
result = router_traffic.insert_many(all_packets)

```


**Delete**
```python
result = router_traffic.delete_many({"time": {"$lt": datetime.datetime.now() - datetime.timedelta(days=1)}})
```


**Aggregation**
```python
aggr_pipeline = [
    { "$match" : {"time": {"$gt": datetime.datetime.now() - datetime.timedelta(minutes=5)}} },
    { "$sort": { "_id" : 1} },
    {   "$group": {
           "_id": {
                "IP":"$_id.IP"
                ,"time": {"$add": [
                { "$subtract": [
                    { "$subtract": [ "$_id.time", datetime.datetime(1970, 1, 1) ] },
                    { "$mod": [ 
                        { "$subtract": [ "$_id.time", datetime.datetime(1970, 1, 1) ] },
                        1000 * 60 * 5
                    ]}
                ]},
                datetime.datetime(1970, 1, 1)
            ]}
            },
           "UL_Sum": { "$sum": "$UL_Sum" },
           "UL_Count": { "$sum": "$UL_Count" },
           "DL_Sum": { "$sum": "$DL_Sum" },
           "DL_Count": { "$sum": "$DL_Count" }
           
        }
    },
    { "$sort": { "_id" : 1} },
    {   "$group": {
            "_id": {
                "IP":"$_id.IP"
            },
            
           "IP": { "$last": "$_id.IP" },
           "time": { "$last": "$_id.time" },
           "UL_Sum": { "$last": "$UL_Sum" },
           "UL_Count": { "$last": "$UL_Count" },
           "DL_Sum": { "$last": "$DL_Sum" },
           "DL_Count": { "$last": "$DL_Count" }
    }
    },
    {   "$project" : { "_id" : 0, "IP": 1 , "time": 1, "UL_Sum" : 1, "UL_Count" : 1 , "DL_Sum" : 1, "DL_Count" : 1 } },
    { "$sort": { "_id" : 1} }
]

stats = list(router_traffic.aggregate(aggr_pipeline))

```

### ORM

<http://www.fullstackpython.com/object-relational-mappers-orms.html>

ORMs (Object Relational Mapper) provide a high-level abstraction upon a relational database that allows a developer to write Python code instead of SQL to create, read, update and delete data and schemas in their database. Developers can use the programming language they are comfortable with to work with a database instead of writing SQL statements or stored procedures.

ORM Libraries:

-   The Django ORM

-   SQLAlchemy

-   Peewee

-   PonyORM

-   SQLObject


### SQLite

#### Insert Auto-Type Conversion

```python
def extract_insert(text, cursor):
    if '\n' in text: text = text.splitlines()
    result_hash = {}
    key = None
    for line in text:
        if ': [' in line and line[-1:] == "]":
            arr = line.split(': [')
            key = arr[0].replace(" ", "_")
            result_hash[key] = arr[1].replace("]", "")
            key = None
        elif ': [' in line and line[-1:] != "]":
            arr = line.split(': [')
            key = arr[0].replace(" ", "_")
            result_hash[key] = arr[1]
        elif key != None:
            result_hash[key] = result_hash[key] + '\n' + line
            
    
    result_hash["Start_time"] = to_sql_datetime(result_hash["Start_time"])
    result_hash["End_time"] = to_sql_datetime(result_hash["End_time"])
    
    sql = '''REPLACE INTO workflow_stats ("{fields}") VALUES ({values})'''
    sql = sql.format(fields='","'.join(result_hash), values=', '.join(['?']*len(result_hash)))
    cursor.execute(sql, tuple(result_hash.values()))

```

#### Select
```python
# print column names
c.execute("SELECT * FROM my_db")
col_name_list = [tup[0] for tup in c.description]
print col_name_list

# print all lines ordered by integer value in my_var2
for row in c.execute('SELECT * FROM my_db ORDER BY my_var2'):
    print row

# print all lines that have "YES" as my_var1 value 
# and have an integer value <= 7 in my_var2
t = ('YES',7,)
for row in c.execute('SELECT * FROM my_db WHERE my_var1=? AND my_var2 <= ?', t):
    print row

# print all lines that have "YES" as my_var1 value 
# and have an integer value <= 7 in my_var2
t = ('YES',7,)
c.execute('SELECT * FROM my_db WHERE my_var1=? AND my_var2 <= ?', t)
rows = c.fetchall()
for r in rows:
    print r

```

System
------

### Progress bar:
```python
from tqdm import tqdm
for i in tqdm(range(10000)):
```

OR

```python
status='{}% complete\r'.format(int(i*100/len(list0)))
sys.stdout.write('\r'+status)
sys.stdout.flush()
```


### Concurrent Processing

#### Multiprocessing

**Pros**

-   Separate memory space

-   Code is usually straightforward

-   Takes advantage of multiple CPUs & cores

-   Avoids GIL limitations for cPython

-   Eliminates most needs for synchronization primitives unless if you use shared memory (instead, it's more of a communication model for IPC)

-   Child processes are interruptible/killable

-   Python multiprocessing module includes useful abstractions with an interface much like threading.Thread

-   A must with cPython for CPU-bound processing

**Cons**

-   IPC a little more complicated with more overhead (communication model vs. shared memory/objects)

-   Larger memory footprint

#### Threading

**Pros**

-   Lightweight - low memory footprint

-   Shared memory - makes access to state from another context easier

-   Allows you to easily make responsive UIs

-   cPython C extension modules that properly release the GIL will run in parallel

-   Great option for I/O-bound applications

**Cons**

-   cPython - subject to the GIL

-   Not interruptible/killable

-   If not following a command queue/message pump model (using the Queue module), then manual use of synchronization primitives become a necessity (decisions are needed for the granularity of locking)

-   Code is usually harder to understand and to get right - the potential for race conditions increases dramatically

### Performance

Windows PowerShell:

```powershell
Measure-Command {python script.py}
```

Linux:
```bash
time python script.py
```

### Directory
```python
import os

list_of_files = os.listdir("C:\\temp")
for filename in list_of_files:
    print  filename

```


#### Check existing / Make

```python
if not os.path.exists(folder_path): os.makedirs(folder_path)
```

#### Delete all files in folder:

```python
import glob
for f in glob.glob(params_mapping_passthrough['xml_new_files_folder_path'] + '/*'): os.remove(f)

```

### File Exists

```python
if os.path.isfile(file_path):
```

### Delete File

```python
os.remove(f)
```

### Environment Path

```python
import os
os.environ["PATH"] += os.pathsep + ";/client/bin"

```

**Change Current Directory**

```python
os.chdir(path)
```

### stdin / stdout

```python
import sys
for line in sys.stdin:
    print line

```

### Command Line Arguments

<https://docs.python.org/2/library/argparse.html#module-argparse>

```python
import argparse

parser = argparse.ArgumentParser()

parser.add_argument('-s', action='store', dest='simple_value',
                    help='Store a simple value')

parser.add_argument('-c', action='store_const', dest='constant_value',
                    const='value-to-store',
                    help='Store a constant value')

parser.add_argument('-t', action='store_true', default=False,
                    dest='boolean_switch',
                    help='Set a switch to true')
parser.add_argument('-f', action='store_false', default=False,
                    dest='boolean_switch',
                    help='Set a switch to false')

parser.add_argument('-a', action='append', dest='collection',
                    default=[],
                    help='Add repeated values to a list',
                    )

parser.add_argument('-A', action='append_const', dest='const_collection',
                    const='value-1-to-append',
                    default=[],
                    help='Add different values to list')
parser.add_argument('-B', action='append_const', dest='const_collection',
                    const='value-2-to-append',
                    help='Add different values to list')

parser.add_argument('--version', action='version', version='%(prog)s 1.0')

results = parser.parse_args()
print 'simple_value     =', results.simple_value
print 'constant_value   =', results.constant_value
print 'boolean_switch   =', results.boolean_switch
print 'collection       =', results.collection
print 'const_collection =', results.const_collection

```

<https://pymotw.com/2/argparse/>

```python
import argparse

parser = argparse.ArgumentParser(description='Process some integers.')
parser.add_argument('integers', metavar='N', type=int, nargs='+',
                   help='an integer for the accumulator')
parser.add_argument('--sum', dest='accumulate', action='store_const',
                   const=sum, default=max,
                   help='sum the integers (default: find the max)')

args = parser.parse_args()
print args.accumulate(args.integers)
```

```python
python /usr/sbin/denyhosts --daemon --purge --config=/etc/denyhosts.conf

import sys
import getopt

args = sys.argv[1:]
try:
    (opts, getopts) = getopt.getopt(args, 'f:c:dinuvps?hV',
                                    ["file=", "ignore", "verbose", "debug", 
                                     "help", "noemail", "config=", "version",
                                     "migrate", "purge", "daemon", "foreground",
                                     "sync", "upgrade099"])
except:
    print "\nInvalid command line option detected."
    usage()
    sys.exit(1)

for opt, arg in opts:
    if opt in ('-h', '-?', '--help'):
        usage()
        sys.exit(0)
    if opt in ('-f', '--file'):
        logfiles.append(arg)
    if opt in ('-i', '--ignore'):
        ignore_offset = 1
    if opt in ('-n', '--noemail'):
        noemail = 1
    if opt in ('-v', '--verbose'):
        verbose = 1
    if opt in ('-d', '--debug'):
        enable_debug = 1
    if opt in ('-c', '--config'):
        config_file = arg
    if opt in ('-m', '--migrate'):
        migrate = 1
    if opt in ('-p', '--purge'):
        purge = 1
    if opt in ('-s', '--sync'):
        sync_mode = 1
    if opt == '--daemon':
        daemon = 1
    if opt == '--foreground':
        foreground = 1
    if opt == '--upgrade099':
        upgrade099 = 1
    if opt == '--version':
        print "DenyHosts version:", VERSION
        sys.exit(0)

```

### Commands

#### One way simple

from subprocess import call

```python
from subprocess import call
call(["ls", "-l"])

```

### Simple to get output
```
import subprocess
out = subprocess.getoutput(lcmd)
```

#### To get All output

This **BLOCKS/WAITS** until process is done.

```python
import subprocess

p = subprocess.Popen(["ls", "-l"], shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
for line in p.stdout.readlines(): print line.rstrip()
retval = p.wait()

```

#### To get live output

This **DOES NOT** block/wait until process is done:

```python
import subprocess

p = subprocess.Popen(["ls", "-l"], shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
lines = []
for line in iter(p.stdout.readline, ''): 
    lines.append(line.rstrip())

```

Web / JSON
----------

### urllib2

```python
from urllib2 import Request, urlopen
import json

headers = {
  'Content-type': 'application/json'
}

values = """
{
  "request": {
    "slice": [
      {
        "origin": "FLL",
        "destination": "PAP",
        "date": "2015-07-30"
      },
      {
        "origin": "PAP",
        "destination": "FLL",
        "date": "2015-08-02"
      }
    ],
    "passengers": {
      "adultCount": 1,
      "infantInLapCount": 0,
      "infantInSeatCount": 0,
      "childCount": 0,
      "seniorCount": 0
    },
    "solutions": 50,
    "refundable": false
  }
}
"""

api_key = 'AIzaSyDY1GHnC28WaABzyMdHKapVt2Mc0yCeigc'
base_url = 'https://www.googleapis.com/qpxExpress/v1/trips/search?key='
request = Request(base_url + api_key, data=values)

for k,v in headers.iteritems():
    request.add_header(k, v)

json_data = json.load(urlopen(request))

```

#### Use Proxy

```python
proxy = urllib2.ProxyHandler({'http': '127.0.0.1'})
opener = urllib2.build_opener(proxy)
urllib2.install_opener(opener)
urllib2.urlopen('http://www.google.com')

```

### NLTM Windows Auth
```python
import requests
from requests.auth import HTTPBasicAuth
from requests_ntlm import HttpNtlmAuth

requests.get(sharepoint_url, auth=HttpNtlmAuth('domain\\user','password'))
```

### Selenium

#### Use Proxy

```python
from selenium import webdriver
from selenium.webdriver.common.proxy import *

myProxy = "host:8080"

proxy = Proxy({
    'proxyType': ProxyType.MANUAL,
    'httpProxy': myProxy,
    'ftpProxy': myProxy,
    'sslProxy': myProxy,
    'noProxy': '' # set this value as desired
    })

driver = webdriver.Firefox(proxy=proxy)

```

### A Proxy Server

```python
#!/usr/bin/python
# This is a simple port-forward / proxy, written using only the default python
# library. If you want to make a suggestion or fix something you can contact-me
# at voorloop_at_gmail.com
# Distributed over IDC(I Don't Care) license
import socket
import select
import time
import sys
 
# Changing the buffer_size and delay, you can improve the speed and bandwidth.
# But when buffer get to high or delay go too down, you can broke things
buffer_size = 4096
delay = 0.0001
forward_to = ('smtp.zaz.ufsk.br', 25)
 
class Forward:
    def __init__(self):
        self.forward = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
 
    def start(self, host, port):
        try:
            self.forward.connect((host, port))
            return self.forward
        except Exception, e:
            print e
            return False
 
class TheServer:
    input_list = []
    channel = {}
 
    def __init__(self, host, port):
        self.server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        self.server.bind((host, port))
        self.server.listen(200)
 
    def main_loop(self):
        self.input_list.append(self.server)
        while 1:
            time.sleep(delay)
            ss = select.select
            inputready, outputready, exceptready = ss(self.input_list, [], [])
            for self.s in inputready:
                if self.s == self.server:
                    self.on_accept()
                    break
 
                self.data = self.s.recv(buffer_size)
                if len(self.data) == 0:
                    self.on_close()
                    break
                else:
                    self.on_recv()
 
    def on_accept(self):
        forward = Forward().start(forward_to[0], forward_to[1])
        clientsock, clientaddr = self.server.accept()
        if forward:
            print clientaddr, "has connected"
            self.input_list.append(clientsock)
            self.input_list.append(forward)
            self.channel[clientsock] = forward
            self.channel[forward] = clientsock
        else:
            print "Can't establish connection with remote server.",
            print "Closing connection with client side", clientaddr
            clientsock.close()
 
    def on_close(self):
        print self.s.getpeername(), "has disconnected"
        #remove objects from input_list
        self.input_list.remove(self.s)
        self.input_list.remove(self.channel[self.s])
        out = self.channel[self.s]
        # close the connection with client
        self.channel[out].close()  # equivalent to do self.s.close()
        # close the connection with remote server
        self.channel[self.s].close()
        # delete both objects from channel dict
        del self.channel[out]
        del self.channel[self.s]
 
    def on_recv(self):
        data = self.data
        # here we can parse and/or modify the data before send forward
        print data
        self.channel[self.s].send(data)
 
if __name__ == '__main__':
        server = TheServer('', 9090)
        try:
            server.main_loop()
        except KeyboardInterrupt:
            print "Ctrl C - Stopping server"
            sys.exit(1)

```

Other
-----

### Decorators

Decorators allow on-the-fly pre/post function operations/customizations.

They are **function wrappers**.

**Synchronize Lock:**

```python
def synchronized(lock):
    """ Synchronization decorator """
    def wrap(f):
        def newFunction(*args, **kw):
            lock.acquire()
            try:
                return f(*args, **kw)
            finally:
                lock.release()
        return newFunction
    return wrap

import threading
lock = threading.Lock()

@synchronized(lock)
def do_something():
  # etc

@synchronzied(lock)
def do_something_else():
  # etc

```

**Time Wrapper:**

```python
def time_dec(func):

  def wrapper(*arg):
      t = time.time()
      res = func(*arg)
      print func.func_name, time.clock()-t
      return res

  return wrapper


@time_dec
def myFunction(n):

```

### PyVirtualDisplay

```bash
pip install pyvirtualdisplay
```

**CentOs**

```bash
wget http://vault.centos.org/6.2/os/x86_64/Packages/xorg-x11-server-Xvfb-1.10.4-6.el6.x86_64.rpm
yum localinstall -y xorg-x11-server-Xvfb-1.10.4-6.el6.x86_64.rpm

```

**Debian**
```bash
apt-get install -y xvfb
```

### Logger

```python
logger = get_logger()
# create console handler and set level to debug
ch = logging.StreamHandler()
#ch.setLevel(logging.DEBUG)

# create formatter
formatter = logging.Formatter("%(asctime)s;%(levelname)s;%(message)s","%Y-%m-%d %H-%M-%S")

# add formatter to ch
ch.setFormatter(formatter)
logger.addHandler(ch)
logger.propagate = False

```

### LXML

```bash
yum install libxslt-devel
OR
sudo apt-get install python-dev libxml2-dev libxslt-dev build-essential

sudo pip install lxml

```
```python
for element in xml_tree.iter():
            # print element.tag
            
            if element.tag == 'FOLDER': v_FOLDER = element.get('NAME')
            
            if element.tag == 'SESSION': 
                session_hash = dict(session_hash.items() + extract_SESSION2(element).items())
            
            
            
            if element.tag == 'WORKFLOW':
                v_WORKFLOW_NAME = element.get('NAME')
                data_row = []
                print v_WORKFLOW_NAME
                
                for SESSION in element.findall('SESSION'):
                    session_hash = dict(session_hash.items() + extract_SESSION2(SESSION).items())
```

<http://www.w3schools.com/xml/xml_xpath.asp>

```python
for element in xml_tree.xpath('//FOLDER'):
```

### Install Python 2.7 on CentOs
```bash
# Install dependencies
yum groupinstall -y 'development tools'
yum install -y zlib-devel bzip2-devel openssl-devel xz-libs wget

# Download the Python source and unpack it
wget http://www.python.org/ftp/python/2.7.9/Python-2.7.9.tar.xz
xz -d Python-2.7.9.tar.xz
tar -xvf Python-2.7.9.tar

# Enter the directory, configure, and install
cd Python-2.7.9
./configure --prefix=/usr/local
make
make altinstall

# Check the Python version with `python2.7 -V` and make sure
# /usr/local/bin is in your `PATH` with `echo $PATH`. If not
# do `export PATH="/usr/local/bin:$PATH"`

# Install `setuptools`
cd ..
wget --no-check-certificate https://pypi.python.org/packages/source/s/setuptools/setuptools-14.0.tar.gz
tar -xvf setuptools-14.0.tar.gz
cd setuptools-14.0
python2.7 setup.py install

# Install `pip`
curl https://raw.githubusercontent.com/pypa/pip/master/contrib/get-pip.py | python2.7 -

# Install `virtualenv`
pip2.7 install virtualenv

```

### Python Libraries

```bash
apt-get install -y build-essential libncursesw5-dev libssl-dev libgdbm-dev libc6-dev libsqlite3-dev tk-dev libbz2-dev
```

### How To Deploy Flask Web Applications Using uWSGI Behind Nginx

CentOS 6.4

<https://www.digitalocean.com/community/tutorials/how-to-deploy-flask-web-applications-using-uwsgi-behind-nginx-on-centos-6-4>

Ubuntu:

<https://www.digitalocean.com/community/tutorials/how-to-serve-flask-applications-with-uwsgi-and-nginx-on-ubuntu-14-04>

Flask
-----

**Passing Variables to Template**
```python
from flask import Flask, render_template, url_for

app = Flask(__name__)

class User(object):
   def __init__(self, fn, ls):
      self.first_name = fn
      self.last_name = ln

@app.route("/")
@app.route("/index")
def hello():
    return render_template("index.html", title="My Title!",
                                text="My text is typed here!!!!!",
                                user = User("Adam", "Smith"))

if __name__ == "__main__":
    app.run(host= '0.0.0.0', port = 5000, debug=True)

```

### Passing Params through URI
```python
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def get_dir(path):
    # do some stuff
    return path
You can typecast (well kinda) the arguments in three ways, path, int and float, nothing means string.

<int:stuff> # accepts integers (typecasts)
<float:stuff> # like int but for floating point values
<path:stuff> # like the default but also accepts slashes
<stuff> # Default

```

### Handle Form POST Requests

<http://code.runnable.com/UhLMQLffO1YSAADK/handle-a-post-request-in-flask-for-python>

```python
@app.route('/hello', methods=['POST'])
def hello():
    name=request.form['yourname']
    email=request.form['youremail']
    return render_template('form_action.html', name=name, email=email)

```

### Handle URL Arguments

<http://code.runnable.com/Uhf58hcCo9RSAACs/using-sessions-in-flask-for-python>
```python
@app.route('/form')
def form(): # "GET /form?yourname=fff HTTP/1.1"
  sumSessionCounter()

  # if a name has been sent, store it on a session variable
  if request.args.get('yourname'):
    session['name'] = request.args.get('yourname')
    # And then redirect the user to the main page
    return redirect(url_for('index'))

  else:
    # If no name has been sent, show the form
    return render_template('form.html', session=session)

```

Flask with AngularJS:

<https://realpython.com/blog/python/flask-by-example-integrating-flask-and-angularjs/>

Flask with JQuery:

<http://www.giantflyingsaucer.com/blog/?p=4310>



## Jython


**Distributing a JAR**
<http://www.jython.org/jythonbook/en/1.0/SimpleWebApps.html#distributing-via-standalone-jar>

**JDBC**
<https://wiki.python.org/jython/DatabaseExamples>
<http://www.jython.org/jythonbook/en/1.0/DatabasesAndJython.html>



## Scrapy

**Extract all images**:

```python
from scrapy.selector import Selector
from scrapy.http import HtmlResponse

response = HtmlResponse(url='http://example.com', body=html_text, encoding='utf8')
response.css('img').xpath('@src').extract()

```

**Using CSS**
```python
from scrapy.selector import Selector
from scrapy.http import HtmlResponse

response = HtmlResponse(url='http://example.com', body=html_text, encoding='utf8')
results = response.css(css_selector_str1)
item = results[0]
text = item.css(css_selector_str2 + '::text').extract()
```



# SSH
```python

class Server(object):
  def __init__(self, name, ip, username, password=None, key_path=None):
    self.port = 22
    if ":" in ip:
        self.port = int(ip.split(":")[-1])
        ip = ip.split(":")[0]
    
    import paramiko
    self.name = name
    self.ip = ip
    self.username = username
    self.password = password
    self.temp_path = "/temp"
    self.cores = 0
    self.jobs_running = 0
    self.connect_tries = 0
    self.connected = False
    self.core_id_status = {}
    self.core_id_queue = {}
    self.core_id_lock = {}

    self.key = paramiko.RSAKey.from_private_key_file(key_path) if key_path else None
    
    self.ssh_client = paramiko.SSHClient()
    self.ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    self.status = Status(text='', spinner='dots')
      
  
  def ssh_connect(self):
    self.connect_tries += 1
        
    try:
      with Status(text='Connecting to ' + self.ip, spinner='dots'):
        self.ssh_client.connect(self.ip, self.port, self.username, self.password, timeout=4, pkey=self.key)
        self.sftp = self.ssh_client.open_sftp()
      self.connected = True
      log("Successful Connection to " + self.name + " (%s)" % self.ip)
      return self.connected
      
      #self.channel = self.ssh_client.get_transport().open_session()
      
      # Get CPU cores
      stdin, stdout, stderr = self.ssh_client.exec_command('cat /proc/cpuinfo')
      output = []
      for line in stdout.readlines(): output.append(line.replace('\n',''))
      
      for line in output:
        line_arr = line.split()
        try:
          if line_arr[0] == 'processor':
            self.cores = self.cores + 1
            self.core_id_status[self.cores] = 'free'
            self.core_id_queue[self.cores] = 'no'
            self.core_id_lock[self.cores] = threading.RLock()
        except:
            pass
    except:
      error_message = "Failed to connect to " + self.name + " (%s)" % self.ip + " -> " + get_exception_message()
      log(error_message, color='red')
      return self.connected
  
  def ssh_command(self, command, wait_for_output = True):
    if(not self.connected): self.ssh_connect()
    
    try:
      stdin, stdout, stderr = self.ssh_client.exec_command(command)
    except socket.error as e:
      # not connected?
      self.connected = False
      self.ssh_connect()
      stdin, stdout, stderr = self.ssh_client.exec_command(command)
        
    self.last_output = ''
    self.last_output_lines = 0
    
    if(wait_for_output):
      self.ssh_chan_status = stdout.channel.recv_exit_status()
      for line in stdout.readlines():
        self.last_output = self.last_output + line
        self.last_output_lines += 1
        
    return self.last_output
  
  def sftp_copy_from(self, remote_filepath, local_filepath):
    if(not self.test_connection): self.ssh_connect()
    # copy file from remote server object to local path
    log("Downloading from '" + remote_filepath + "' to '" + local_filepath + "'")
    try:
      self.status.start()
      self.last_stat = None
      self.sftp.get(remote_filepath, local_filepath, callback=self.transfer_progress)
      self.status.stop()
    except:
      error_message = get_exception_message() + '\nremote_filepath: ' + self.name + ':' + remote_filepath + '\nlocal_filepath: ' + local_filepath
      log(error_message, color='red')
  
  def sftp_copy_to(self, local_filepath, remote_filepath):
    if(not self.test_connection): self.ssh_connect()
    # copy file from local path to remote server object
    log("Uploading from '" + local_filepath + "' to '" + remote_filepath  + "'")
    try:
      self.status.start()
      self.last_stat = None
      self.sftp.put(local_filepath, remote_filepath, callback=self.transfer_progress)
      self.status.stop()
    except:
      error_message = get_exception_message() + '\nremote_filepath: ' + self.name + ':' + remote_filepath + '\nlocal_filepath: ' + local_filepath
      log(error_message, color='red')
  
  def transfer_progress(self, transferred, total, unit='B'):
    "Display transfer progress"
    prct = int(100.0 * transferred / total)
    divide = lambda x, y: round(1.0 * x / (y), 1)
    
    if self.last_stat:
      secs = (datetime.datetime.now() - self.last_stat['time']).total_seconds()
      if secs > 2:
        rate = round((transferred - self.last_stat['transferred']) / secs, 1)
        self.last_stat = dict(time=now(), transferred=transferred, rate=rate)
      else:
        rate = self.last_stat['rate']
    else:
      rate = 0
      self.last_stat = dict(time=now(), transferred=transferred, rate=rate)
    
    if total > 1024 ** 3:
      transferred = divide(transferred, 1024 ** 3)
      total = divide(total, 1024 ** 3)
      unit='GB'
      rate = '{} {} / sec'.format(divide(rate, 1024 ** 2), 'MB')
    elif total > 1024 ** 2:
      transferred = divide(transferred, 1024 ** 2)
      total = divide(total, 1024 ** 2)
      unit='MB'
      rate = '{} {} / sec'.format(divide(rate, 1024 ** 2), unit)
    elif total > 1024 ** 1:
      transferred = divide(transferred, 1024 ** 1)
      total = divide(total, 1024 ** 1)
      unit='KB'
      rate = '{} {} / sec'.format(divide(rate, 1024 ** 1), unit)
    self.status.text = '{}% Complete: {} / {} {} @ {}'.format(prct, transferred, total, unit, rate)

  def test_connection(self):
    stdout = self.ssh_client.exec_command('ls')
    return self.connected


  def __init__(self, name, ip, username, password):
    self.port = 22
    if ":" in ip:
        self.port = int(ip.split(":")[-1])
        ip = ip.split(":")[0]
    
    import paramiko
    self.name = name
    self.ip = ip
    self.username = username
    self.password = password
    self.temp_path = "/temp"
    self.cores = 0
    self.jobs_running = 0
    self.connect_tries = 0
    self.connected = False
    self.core_id_status = {}
    self.core_id_queue = {}
    self.core_id_lock = {}
    
    self.ssh_client = paramiko.SSHClient()
    self.ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    self.status = Status(text='', spinner='dots')
      
  
  def ssh_connect(self):
    self.connect_tries += 1
        
    try:
      with Status(text='Connecting to ' + self.ip, spinner='dots'):
        self.ssh_client.connect(self.ip, self.port, self.username, self.password, timeout=4)
        self.sftp = self.ssh_client.open_sftp()
      self.connected = True
      log("Successful Connection to " + self.name + " (%s)" % self.ip)
      return self.connected
      
      #self.channel = self.ssh_client.get_transport().open_session()
      
      # Get CPU cores
      stdin, stdout, stderr = self.ssh_client.exec_command('cat /proc/cpuinfo')
      output = []
      for line in stdout.readlines(): output.append(line.replace('\n',''))
      
      for line in output:
        line_arr = line.split()
        try:
          if line_arr[0] == 'processor':
            self.cores = self.cores + 1
            self.core_id_status[self.cores] = 'free'
            self.core_id_queue[self.cores] = 'no'
            self.core_id_lock[self.cores] = threading.RLock()
        except:
            pass
    except:
      error_message = "Failed to connect to " + self.name + " (%s)" % self.ip + " -> " + get_exception_message()
      log(error_message, color='red')
      return self.connected
  
  def ssh_command(self, command, wait_for_output = True):
    if(not self.connected): self.ssh_connect()
    
    try:
      stdin, stdout, stderr = self.ssh_client.exec_command(command)
    except socket.error as e:
      # not connected?
      self.connected = False
      self.ssh_connect()
      stdin, stdout, stderr = self.ssh_client.exec_command(command)
        
    self.last_output = ''
    self.last_output_lines = 0
    
    if(wait_for_output):
      self.ssh_chan_status = stdout.channel.recv_exit_status()
      for line in stdout.readlines():
        self.last_output = self.last_output + line
        self.last_output_lines += 1
        
    return self.last_output
  
  def sftp_copy_from(self, remote_filepath, local_filepath):
    if(not self.test_connection): self.ssh_connect()
    # copy file from remote server object to local path
    log("Downloading from '" + remote_filepath + "' to '" + local_filepath + "'")
    try:
      self.status.start()
      self.last_stat = None
      self.sftp.get(remote_filepath, local_filepath, callback=self.transfer_progress)
      self.status.stop()
    except:
      error_message = get_exception_message() + '\nremote_filepath: ' + self.name + ':' + remote_filepath + '\nlocal_filepath: ' + local_filepath
      log(error_message, color='red')
  
  def sftp_copy_to(self, local_filepath, remote_filepath):
    if(not self.test_connection): self.ssh_connect()
    # copy file from local path to remote server object
    log("Uploading from '" + local_filepath + "' to '" + remote_filepath  + "'")
    try:
      self.status.start()
      self.last_stat = None
      self.sftp.put(local_filepath, remote_filepath, callback=self.transfer_progress)
      self.status.stop()
    except:
      error_message = get_exception_message() + '\nremote_filepath: ' + self.name + ':' + remote_filepath + '\nlocal_filepath: ' + local_filepath
      log(error_message, color='red')
  
  def transfer_progress(self, transferred, total, unit='B'):
    "Display transfer progress"
    prct = int(100.0 * transferred / total)
    divide = lambda x, y: round(1.0 * x / (y), 1)
    
    if self.last_stat:
      secs = (datetime.datetime.now() - self.last_stat['time']).total_seconds()
      if secs > 2:
        rate = round((transferred - self.last_stat['transferred']) / secs, 1)
        self.last_stat = dict(time=now(), transferred=transferred, rate=rate)
      else:
        rate = self.last_stat['rate']
    else:
      rate = 0
      self.last_stat = dict(time=now(), transferred=transferred, rate=rate)
    
    if total > 1024 ** 3:
      transferred = divide(transferred, 1024 ** 3)
      total = divide(total, 1024 ** 3)
      unit='GB'
      rate = '{} {} / sec'.format(divide(rate, 1024 ** 2), 'MB')
    elif total > 1024 ** 2:
      transferred = divide(transferred, 1024 ** 2)
      total = divide(total, 1024 ** 2)
      unit='MB'
      rate = '{} {} / sec'.format(divide(rate, 1024 ** 2), unit)
    elif total > 1024 ** 1:
      transferred = divide(transferred, 1024 ** 1)
      total = divide(total, 1024 ** 1)
      unit='KB'
      rate = '{} {} / sec'.format(divide(rate, 1024 ** 1), unit)
    self.status.text = '{}% Complete: {} / {} {} @ {}'.format(prct, transferred, total, unit, rate)

  def test_connection(self):
    stdout = self.ssh_client.exec_command('ls')
    return self.connected
```


# Pip

**Installing with custom RPM library**
```bash
# Download RPM located at http://rpmfind.net/linux/rpm2html/search.php?query=ncurses-static
cd /data/user/fl88589/tmp
wget http://rpmfind.net/linux/centos/6.9/os/x86_64/Packages/ncurses-static-5.7-4.20090207.el6.x86_64.rpm

# Install rpm without root
cd /data/user/fl88589/ps/ncurses-static
rpm2cpio /data/user/fl88589/tmp/ncurses-static-5.7-4.20090207.el6.x86_64.rpm | cpio -idv

# pip install
tpip3 install --global-option=build_ext --global-option="-L/data/user/fl88589/ps/ncurses-static/usr/lib64" readline
```

