# -*- coding: utf-8 -*-
from flask import Flask
from config import Config


def app_create():
    app = Flask(__name__)

    from .index import index
    app.register_blueprint(index, url_prefix="/index")

    return app
