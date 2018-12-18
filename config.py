# -*- coding: utf-8 -*-
class Config:
    """
    base Config
    """
    DATABASE_USER = "root"
    DATABASE_PASSWORD = "pwd"
    DATABASE_IP = "127.0.0.1"
    DATABASE_PORT = "3306"
    DATABASE_NAME = "test"
    DATABASE_URL = "mysql:///{user}:{pwd}@{ip}:{port}/{database}?charset=utf-8".format(user=DATABASE_USER,
                                                                                       pwd=DATABASE_PASSWORD,
                                                                                       ip=DATABASE_IP,
                                                                                       port=DATABASE_PORT,
                                                                                       database=DATABASE_NAME)
