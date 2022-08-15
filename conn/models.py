from django.db import models

class GlbModel(models.Model):
    name = models.CharField(max_length=255)
    
    def __str__(self):
        return self.name