# Python | Jupyter

---

## Tutorial

- 13 min video -> [https://www.youtube.com/watch?v=Rc4JQWowG5I](https://www.youtube.com/watch?v=Rc4JQWowG5I)
- Deeper -> [https://www.datacamp.com/community/tutorials/tutorial-jupyter-notebook](https://www.datacamp.com/community/tutorials/tutorial-jupyter-notebook)
- More -> [https://www.google.com/search?q=jupyter+notebook+tutorial](https://www.google.com/search?q=jupyter+notebook+tutorial)

## Keyboard Shortcuts

[https://www.cheatography.com/weidadeyue/cheat-sheets/jupyter-notebook/](https://www.cheatography.com/weidadeyue/cheat-sheets/jupyter-notebook/)


## Python Concepts

- Variable types - [https://www.tutorialspoint.com/python/python_variable_types.htm](https://www.tutorialspoint.com/python/python_variable_types.htm)
- Lists - [https://www.tutorialspoint.com/python/python_lists.htm](https://www.tutorialspoint.com/python/python_lists.htm)
- Functions - [https://www.tutorialspoint.com/python/python_functions.htm](https://www.tutorialspoint.com/python/python_functions.htm)
- If/then/else - [https://www.tutorialspoint.com/python/python_if_else.htm](https://www.tutorialspoint.com/python/python_if_else.htm)
- For loops - [https://www.tutorialspoint.com/python/python_for_loop.htm](https://www.tutorialspoint.com/python/python_for_loop.htm)
 

## Accessing Oracle Databases

Example -> [https://gist.github.com/mvaz/2006493](https://gist.github.com/mvaz/2006493)

**Don't use SQL alchemy**

  
## Pandas

Pandas provides high level data manipulation tools built on top of NumPy. NumPy by itself is a fairly low-level tool, and will be very much similar to using MATLAB. pandas on the other hand provides rich time series functionality, data alignment, NA-friendly statistics, group by, merge and join methods, and lots of other conveniences.

- [http://pandas.pydata.org/pandas-docs/stable/10min.html](http://pandas.pydata.org/pandas-docs/stable/10min.html)
- [http://pandas.pydata.org/pandas-docs/stable/tutorials.html](http://pandas.pydata.org/pandas-docs/stable/tutorials.html)
- [https://www.datacamp.com/community/tutorials/pandas-tutorial-dataframe-python](https://www.datacamp.com/community/tutorials/pandas-tutorial-dataframe-python)


## Interactive Inputs
[https://blog.dominodatalab.com/interactive-dashboards-in-jupyter/](https://blog.dominodatalab.com/interactive-dashboards-in-jupyter/)
[http://dominicgiles.com/blog/files/bbffdb638932620b3182980fbd0e3d5b-146.html](http://dominicgiles.com/blog/files/bbffdb638932620b3182980fbd0e3d5b-146.html)

  
## Kernel List
[https://github.com/jupyter/jupyter/wiki/Jupyter-kernels](https://github.com/jupyter/jupyter/wiki/Jupyter-kernels)

  

## Jython Kernel
[https://github.com/fiber-space/jupyter-kernel-jsr223](https://github.com/fiber-space/jupyter-kernel-jsr223)


## Tabs Size
[https://github.com/pprzetacznik/IElixir/issues/7](https://github.com/pprzetacznik/IElixir/issues/7)


## Password

[http://jupyter-notebook.readthedocs.io/en/latest/public_server.html](http://jupyter-notebook.readthedocs.io/en/latest/public_server.html)

  

## Keyboard shortcut to Run All

[http://stackoverflow.com/questions/33143753/ipython-notebooks-shortcut-for-run-all](http://stackoverflow.com/questions/33143753/ipython-notebooks-shortcut-for-run-all)

[http://jupyter-notebook.readthedocs.io/en/latest/examples/Notebook/Custom%20Keyboard%20Shortcuts.html](http://jupyter-notebook.readthedocs.io/en/latest/examples/Notebook/Custom%20Keyboard%20Shortcuts.html)


## Extensions

[https://github.com/ipython-contrib/jupyter_contrib_nbextensions](https://github.com/ipython-contrib/jupyter_contrib_nbextensions)

List: [https://github.com/ipython-contrib/jupyter_contrib_nbextensions/tree/master/src/jupyter_contrib_nbextensions/nbextensions](https://github.com/ipython-contrib/jupyter_contrib_nbextensions/tree/master/src/jupyter_contrib_nbextensions/nbextensions)

Docs: [http://jupyter-contrib-nbextensions.readthedocs.io/en/latest/](http://jupyter-contrib-nbextensions.readthedocs.io/en/latest/)

Configurator: [https://github.com/Jupyter-contrib/jupyter_nbextensions_configurator](https://github.com/Jupyter-contrib/jupyter_nbextensions_configurator)



### Best
- jupyter nbextension enable codefolding/main
- jupyter nbextension enable highlight_selected_word/main
- jupyter nbextension enable execute_time/ExecuteTime
- jupyter nbextension enable init_cell/main
- jupyter nbextension enable toggle_all_line_numbers/main
- jupyter nbextension enable highlighter/highlighter

### Table Of Contents
[https://github.com/minrk/ipython_extensions](https://github.com/minrk/ipython_extensions)
[https://github.com/kmahelona/ipython_notebook_goodies](https://github.com/kmahelona/ipython_notebook_goodies)

### Execute Time

```python
from notebook.services.config import ConfigManager

ConfigManager().update('notebook', {'ExecuteTime': {
  'display_absolute_timestamps': False,
  'relative_timing_update_period': 5,
  'default_kernel_to_utc': False,
  'display_absolute_timings': 'YYYY-MM-DD HH:mm:ss',
  'template': {
    'executed': 'started ${start_time}, finished in ${duration}',
  }
}})
```