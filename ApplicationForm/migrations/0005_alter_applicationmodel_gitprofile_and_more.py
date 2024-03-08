# Generated by Django 5.0.2 on 2024-03-08 09:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ApplicationForm', '0004_applicationmodel_gitprofile_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='applicationmodel',
            name='gitProfile',
            field=models.CharField(max_length=200, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='applicationmodel',
            name='gitProgram',
            field=models.CharField(max_length=200, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='applicationmodel',
            name='gitSteak',
            field=models.CharField(max_length=200, null=True, unique=True),
        ),
    ]
