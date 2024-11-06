from django.http import HttpResponseRedirect
from django.shortcuts import render
from users.forms import UserRegistrationForm
from django.contrib import auth, sessions
from django.urls import reverse

def login(request):


    return render(request, "users/login.html")

def registration(request):
    
    if request.method == "POST":
        form = UserRegistrationForm(data = request.POST)
        if form.is_valid():
            username = request.POST['username']
            password = request.POST['password']

            user = auth.authenticate(username = username, password = password)
            # sessions_key = request.sessions.sessions_key

            if user:
                auth.login(request,user)

                return HttpResponseRedirect(reverse('main:home'))

    # else:
    #     form = UserLoginForm()
        
    context = {
        'form': form,
    }

    return render(request, "users/registration.html", context)
