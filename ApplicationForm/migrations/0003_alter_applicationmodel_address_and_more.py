# Generated by Django 5.0.2 on 2024-03-03 09:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ApplicationForm', '0002_alter_applicationmodel_phonenum'),
    ]

    operations = [
        migrations.AlterField(
            model_name='applicationmodel',
            name='address',
            field=models.CharField(max_length=50, unique=True),
        ),
        migrations.AlterField(
            model_name='applicationmodel',
            name='email',
            field=models.EmailField(max_length=50, unique=True),
        ),
        migrations.AlterField(
            model_name='applicationmodel',
            name='github',
            field=models.CharField(max_length=50, unique=True),
        ),
        migrations.AlterField(
            model_name='applicationmodel',
            name='interview',
            field=models.CharField(max_length=50, unique=True),
        ),
        migrations.AlterField(
            model_name='applicationmodel',
            name='leetcode',
            field=models.CharField(max_length=50, unique=True),
        ),
        migrations.AlterField(
            model_name='applicationmodel',
            name='linkedin',
            field=models.CharField(max_length=50, unique=True),
        ),
    ]
