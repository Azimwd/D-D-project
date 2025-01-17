from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.template import context
from users.forms import UserLoginForm, UserRegistrationForm
from django.contrib import auth, sessions
from django.urls import reverse


def registration(request):

    if request.method == 'POST':

        form = UserRegistrationForm(data=request.POST)
        if form.is_valid():

            form.save()
            user = form.instance

            auth.login(request, user)
            return HttpResponseRedirect(reverse('main:home'))
    else:
        print('nepost')
        form=UserRegistrationForm()

    context = {
        'form': form,
    }

    return render(request,'users/registration.html',context)

def login(request):

    if request.method == 'POST':

        form = UserLoginForm(data=request.POST)

        if form.is_valid():

            username = request.POST["username"]
            password = request.POST["password"]
            user = auth.authenticate(username=username, password=password)

            if user:
                auth.login(request, user)
                return HttpResponseRedirect(reverse('main:home'))
    else:
        form = UserLoginForm()

    context={
        "form": form
    }

    return render(request, 'users/login.html', context)

def logout(request):
    auth.logout(request)
    return HttpResponseRedirect(reverse('main:home'))

















# def login(request):
#     if request.method == 'POST':
#         form = UserLoginForm(data=request.POST)
#         if form.is_valid():
#             username = request.POST['username']
#             password = request.POST['password']
#             user = auth.authenticate(username = username, password=password)

#             if user:
#                 auth.login(request,user)

#                 return HttpResponseRedirect(reverse('main:index'))
#     else:
#         form = UserLoginForm()
    
#     context = {
#         'form': form,
#     }
#     return render(request, "users/login.html", context)

