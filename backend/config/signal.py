from django.dispatch import receiver
from django.db.models.signals import post_save
from .models import MyUser


@receiver(signal=post_save, sender= MyUser)
def Token(**kwargs):
    print('hello', kwargs)