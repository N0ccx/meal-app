from django.urls import path
from .views import home, profile, RegisterView, get_started, terms, CustomLoginView, ResetPasswordView,ChangePasswordView, opening
urlpatterns = [
    path('', home, name='users-home'),
    path('login/', CustomLoginView.as_view(), name='login'),
    path('register/', RegisterView.as_view(), name='register'),
    path('password-reset/', ResetPasswordView.as_view(), name='password_reset'),
    path('password-change/', ChangePasswordView.as_view(), name='password_change'),
    path('profile/', profile, name='users-profile'),
    path('terms/', terms, name='terms'),
    path('get-started/', get_started, name='get_started'),
    path('opening/', opening, name='opening'),

]