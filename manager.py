# -*- coding: utf-8 -*-
from app import app_create
from flask_script import Manager


app = app_create()
manager = Manager(app)

if __name__ == '__main__':
    manager.run()
