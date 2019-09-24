# from unbabel.api import UnbabelApi

# uapi = UnbabelApi(unbabel_username, unbabel_api_key, 
#                   sandbox=in_test_mode)

# to_translate = 'This is a test'
# target_language = 'pt'
# callback_url = 'http://my_awesome_app.com/unbabel_callback/'

# uapi.post_translations(text=to_translate, target_language=target_language,
#                        callback_url=callback_url

import goslate
 
text = "Hello World"
 
gs = goslate.Goslate()
translatedText = gs.translate(text,'fr')
language_id = gs.detect('hallo welt')
gs.get_languages()[language_id]

print(translatedText)