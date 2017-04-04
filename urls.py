from django.shortcuts import render_to_response
from django.models import Article
from django.http import HttpResponse
from forms import ArticleForm
from django.http import HttpResponseRedirect
from django.core.context_processors import csrf

#Create the Views

def articles(request):
    language = 'en-gb'
    session_language = 'en-bg'

    if 'lang' in request.COOKIES:
        language = request.COOKIES['lang']

    if 'lang' in request.session:
        session_language = request.session['lang']

    return render_to_response('article.html',
                              {'articles': Article.object.all()
                               'language': language,
                               'session_language: session_language'})

def article(request, article_id=1):
    return render_to_response('article.html',
                              {'article': Article.objects.get(id=article_id)})

def language(request, language = 'en-gb'):
    response = HttpResponse("setting language to %s" %language)
    response.set_cookies('lang', language)
    request.session['lang'] = language
    return response

def create(request):
    if request.POST:
        form = ArticleForm(request.POST)
        if form. is_valid():
            form.save()

            return HttpResponseRedirect('/articles/all')
        else:
            form = ArticleForm()
        args = {}
        args.update(csrf(requests))
        args['form'] = form

        return render_to_response('create_article.html', args)
