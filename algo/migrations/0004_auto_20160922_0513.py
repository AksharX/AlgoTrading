# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-09-22 05:13
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('algo', '0003_transaction_reason'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cash',
            fields=[
                ('cash_name', models.CharField(max_length=6, primary_key=True, serialize=False)),
                ('initial_cash_amount', models.DecimalField(decimal_places=2, max_digits=12)),
            ],
        ),
        migrations.RemoveField(
            model_name='stock_performance',
            name='stock',
        ),
        migrations.AddField(
            model_name='transaction',
            name='cash',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10),
            preserve_default=False,
        ),
        migrations.DeleteModel(
            name='stock_performance',
        ),
    ]
