# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-09-02 15:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('algo', '0002_auto_20160902_1144'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaction',
            name='reason',
            field=models.CharField(default='The reason is that I want to kill', max_length=20),
            preserve_default=False,
        ),
    ]
