# Asker-CosmeticsApp
###### *An app complimenting an online store, specialising in professional grade cosmetics products.*

## Pre-development checklists & ToDos:

### <ins>Things to clarify with Asker:</ins>
#### **[**&#xA0;&#xA0;**]** &#x00A9;, &#x2122; etc related stuff. My rights to the code.
#### **[**&#xA0;&#xA0;**]** My name/link to me at least in the *About* section of the app.
#### **[**&#xA0;&#xA0;**]** Post-deployment support - do I provide it or do they?

#

### <ruby><ins>Technology stack the app is built on:</ins><rt><ins>~~Basic technology highlights to be used in the app:~~</ins></rt></ruby>
#### **[**<img height="18" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Quality logos&promo stuff, to be used in:

##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**<img height="16" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** App icons,

##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**<img height="16" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Splash screen,

##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**<img height="16" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Greetings screen (shown upon app installation - several pages),

##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**<img height="16" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Backgrounds,

##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**<img height="16" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** In-app icons styling, compatible with the existing, full-blown online store.

#### **[**<img height="18" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** All images (especially product-related!) to be served at the devices' maximum capability (but not exceeding it, so as not to waste the bandwidth) - true RWD. (Make it easily demonstrable for the admins).

#### **[**<img height="16" src="https://testbed2.cloud.tilaa.com/x2718.svg">**]** ~~Full-blown WebApp 2.0 (e.g. per current Google specs).~~ Go hybrid/native.

#### **[**<img height="18" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Catalogue, orders (both history and pending),  promotional offers etc tie-in to the main site of the company (ideally a db-link to a specially prepared table/view or at least to the live db itself).

#### **[**<img height="18" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Quality RWD:

##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**<img height="18" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Consciously calculated and set media-breaks,

##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**<img height="18" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Conscious UI design decisions for each media setting.

#### **[**<img height="18" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Playmarket / AppStore deployment.

#### <ins>Client-side:</ins>  React, Redux, React-Bootstrap, React-Router, Saga, SVG, ES6+, Highly responsive design (images, custom media breaks, specially adapted to React), Tap/Click dealt with, CSS embedded in JSX, Client side routing, SQLite3.

Client-side functionaly required components and actual components selected for the job:

* **[**&#xA0;&#xA0;**]** A single products' page:
  * **DIY**: Tailour one exquisite React component for the job:
    * It must provide flawless visual presentation of text and images,
    * Doing so at every single media query breakpoint we have devised,
    * Contain a very lightweight image carousele which is visualy very discreet - it must not be immideately obvious that it is there; the first task is to flawlessly present to the user the first (main) image of the page, not an assortment of switches and buttons,
    * Integrated with the carousele should be the <sup><sub>(fullscreen?)</sub></sup> zoom-popup facility of some sort, should an image prove worth a closer look,
    * Given the specific nature of the goods involved, the zoom feature must include the following quirk: the image has one or more predefined 'zones of interest' (e.g.: producers' logo, smaller sized text next to the main one, something else peculiar in the packaging), and when zoomed the image should (after a short timeout and provided the touch event has ended) gravitate either to proper cinematic zoom over the closest of the 'zones of interest' or, if this is the shortest option, to automatically zoom out. Perhaps it might even be a good idea to add barely visible highlight to these pre-set areas of the image, to draw users' attention to them once auto-rezooming mechanism kicks in.
    * While it should be by all means possible to select and copy all or part of this components' contents (e.g. text, describing the product or even a price), any attempt to share the page as a whole (via Android's share mechanism) should lead to it being instantly converted to a page-sized picture or some other basically uneditable entity prior to being released to the recipient (in some cases it might be wise to even hide the price as it was displayed on the page, the logic being that while it is good and well to show everyone what perfect products you are dealing with, doing the same about it's price (and theoretically could be some very special price, e.g. a result of some one-off promo sale and be completely unrepresentative) is not nearly as good an idea..
  * A "card" from Bootstrap 4 (or a panel/well/decoration combo in case of Bootstrap 3), with only the minimal custimisations - clean, neat, standard-compliyng, even if slightly boring.
  * Look for a ready-made component that fits the bill (e.g. one might try ripping it out of some bootstrap online store themes collection).

* **[**&#xA0;&#xA0;**]** A (preferrably) encapsulated component - the working diary (two-way notifications etc).
* **[**&#xA0;&#xA0;**]** A set of stylistically compatible navigational components (i.e. side slider menu, full or partial screen flips (e.g. to see some specifics listed 'on the back' of products' photo), full view slides, navbars. Some reasanble amount of translucency might be a goot thing here, if coupled with appropriate SVG filters and 'light'.
* **[**&#xA0;&#xA0;**]** A better version of Androids' native "Toasts" - visually consistant across platforms, to be used mainly for greeting, encouraging new users as well as showcasing the apps' UI for their benefit. Might also play the role of regular "tips", for example appearing once a day, as user visits some aspect of UI for the first time since last midnight, etc..
* **[**&#xA0;&#xA0;**]** A multipage, fullscreen slider-greeter for the first time users.
* **[**&#xA0;&#xA0;**]** A product catalogue with all the appropriate mechanics built in (hierarchy, navigation, etc).
* **[**&#xA0;&#xA0;**]** A Personal users' space:
  * Best use some pre-themed stock version as a basis to save on trivialities, then follow on, to add:
    * File upload facility
    * Gallery module
  * Another off-the-scratch DIY?.. Might run out of time, so probably not. 

#### <ins>Server-side:</ins> SSL, PHP 7.1+, Postgresql/et al., push scheme of some genesis (yet to be determined), seriously integrated with the full-blown site & online store, admin pages.

Server end is much more predictable, so thech stak looks as follows:

* SQL backend (Postgresql/Mysql),
* Apache 2 SSL,
* PHP 7.1+,
* SSH/SFTP.

#

### <ins>Chief apps' functional features:</ins> <sub>*(WildBerry app is an example)*</sub>

#### **[**<img height="18" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** News reel (push service integration, combine newsreel updates with with WebApp 2.0 basic content updates (Product catalogue, promotional offers, messages, etc)).

#### **[**&#x00B1;**]** Personal space:

##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#x00B1;**]** Personal profile (to tie in with the one at the main site):
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** Personal photo (one? one of, say, three?),
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**<img height="14" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Basic user profile, as set on the main site.
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** When user registers in the app, if their profile doesn't exist on the main site yet - it gets created.

##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#x00B1;**]** Professional diary:
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**<img height="14" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** List of appointments with clients' contacts,
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**<img height="14" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Reminders to be sent out (even to the clients),.....

##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#x00B1;**]** Links pool:
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**<img height="14" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** List of generated (shortened) permalinks to the documents, uploaded by the user,
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** List of generated (shortened) permalinks to the users work showcase gallery,
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** And the list of generated (shortened) permalinks to the work showcase galleries' individual photos (photo pages - they should be always displayed along with relevant metadata, &#x00A9; info & watermark warning/notice).

##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** Users' work showcase uploads:
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** Automatic gallery generation:
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**&#xA0;&#xA0;**]** On-the-fly thumbnail generation,</sub>
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**&#xA0;&#xA0;**]** Mandatory re-creation of the uploaded file (both for security reasons and to keep file sizes/resolutions within the limits of sanity),</sub>
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub><ruby>**[**&#xA0;&#xA0;**]**<rt>**???**</rt></ruby><sup><sup><sup>:warning:</sup></sup></sup> Instagram-like limitation: allow only uploads of snaps done there and then with the phone's camera,</sub>
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**&#xA0;&#xA0;**]** Description entry form (mandatory?..),</sub>
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**&#xA0;&#xA0;**]** Automatic image watermarking (linking it both to the site and the particular user).</sub>

##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#x00B1;**]** Documents uploads:
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#x00B1;**]** Basic scans storage:
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**<img height="12" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** On-the-fly thumbnail generation,</sub>
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**<img height="12" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Mandatory re-creation of the uploaded file (both for security reasons and to keep file sizes/resolutions within the limits of sanity),</sub>
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub><ruby>**[**<img height="12" src="https://testbed2.cloud.tilaa.com/x2718.svg">**]**<rt>**~~???~~**</rt></ruby> ~~Instagram-like limitation: allow only uploads of snaps done there and then with the phone's camera,~~</sub>
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**&#xA0;&#xA0;**]** Documents' metadata entry form (most fields should be optional).</sub>
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** Validation:
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**&#xA0;&#xA0;**]** Technical validation (file type, size, format, etc) - done immediately upon file upload,</sub>
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**&#xA0;&#xA0;**]** Primary content validation (its legibility, that it depicts the document it declares to depcit, etc - done by a human, but requiring only a few moments to check),</sub>
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**&#xA0;&#xA0;**]** Secondary content validation (in depth checks, e.g. license/certificate numbers validation with the bodies that issued them, passport or other ids validity checks, exisitng metadata correctness as well as adding the metadata/data that's been left out, etc).</sub>

##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** Portfolio-like uploaded documents presentational display&service:
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**<img height="14" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Documents section,
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** Users' work showcase.

##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#x00B1;**]** Online orders:
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**<img height="14" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Shopping cart mechanism (entirely in-app),
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**<img height="14" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Order transfer to the existing online store upon its completion,
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** Payment issue (it should be done in the exisitng online store, but still be available as a selectable option within the app... Possibly something like Amazon's "One click buy"?..),
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**<img height="14" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Orders history.

##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** Connected and validated communication methods (each method must contain its validation state, user-selected privacy level, preferred communication timeframe and preferred communications level):
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** Mobile phone(s) (SMS),
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** e-mail(s),
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** Social network accounts,
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** Messenger accounts,
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** Snail-mail addresses:
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**&#xA0;&#xA0;**]** Delivery addresses (a list of, editable),</sub>
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**&#xA0;&#xA0;**]** Work address(es) - for promo needs,</sub>
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**&#xA0;&#xA0;**]** Home address (for account security mostly).</sub>

#### **[**<img height="18" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Promo offers (probably even personalised ones).

#### **[**<img height="18" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Product catalogue.

#### **[**<img height="18" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Product-related articles & other promo materials.

#### **[**&#x00B1;**]** Ability to easily share some stuff:

##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#x00B1;**]** Stuff to share:
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**<img height="14" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Articles,
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**<img height="14" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Product descriptions, <sub>*~~(mandatorily edited versions?..)~~*</sub>
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**<img height="14" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Various licenses, certificates and similar documents. <sub>*(or rather links to the companys' main site, containing the nicely displayed documents in question together with any extra verification the company has done on it - all along the lines of the *`ucancode.ru`*'s *`Portfolio service`*)*</sub>
##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#x00B1;**]** Sharing channels:
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#x00B1;**]** Social media:
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**<img height="12" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** FB,</sub>
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**<img height="12" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** VK,</sub>
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**&#xA0;&#xA0;**]** LinkedIn,</sub>
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**&#xA0;&#xA0;**]** Odnoklassniki,</sub>
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**<img height="12" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Instagram,</sub>
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**<img height="12" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Twitter,</sub>
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**&#xA0;&#xA0;**]** Google+,</sub>
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**&#xA0;&#xA0;**]** Mail.ru,</sub>
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**&#xA0;&#xA0;**]** *what else?..*</sub>
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#x00B1;**]** Messenger programs:
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**<img height="12" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** WhatsApp,</sub>
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**<img height="12" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Viber,</sub>
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**<img height="12" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Telegram,</sub>
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**&#xA0;&#xA0;**]** *etc...*</sub>
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** Traditional phone-related channels:
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**&#xA0;&#xA0;**]** SMS,</sub>
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<sub>**[**&#xA0;&#xA0;**]** MMS.</sub>

### <ins>Admin pages:</ins>

#### **[**<img height="18" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Notification centre. With the ability to:

##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** Set message sending time (the ability to set message to be sent sometime in the future),

##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**<img height="16" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Set the recepient audience (all or a subset of all users, as determined by a regular expression (within limits set by the app), an individual user or a hand-entered list of individual users),

##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** Setup a greeting message for new users (to be auto-sent upon users' app installation&registration with the site/app),

##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**<img height="16" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Setup pre-defined messages to be sent to users upon them meeting of certain pre-defined criteria (e.g.: first work sample posted to the Showcase Gallery, first document successfully uploaded, passed primary & secondary validations, first contact means added, any contact means added, any contact means successfully validated, etc) with a few useful placeholders to be auto-expanded by the system (e.g.: users' name, registration date/time, current date/time etc),

##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**<img height="16" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** Attach an expected reaction information to a message, so that system gets notified when/if user does what he was asked to do in the message (e.g.: shares an article set number of times or makes an order of a specific product or products),

##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**<img height="16" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** View sent notifications history (both in general and per individual user),

##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**<img height="16" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** View notifications' expected actions statuses (both as a percentage/totals summary and per individual user).

#### **[**<img height="18" src="https://testbed2.cloud.tilaa.com/x2714.svg">**]** User activity history/statistics.

#### **[**<img height="18" src="https://testbed2.cloud.tilaa.com/x2718.svg">**]** ~~App feature availability.~~

#
#

## Phase 2 (Wishlists):

### In-app messenger

#### <ins>Features:</ins>
##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** No user contact info is available inside the messenger except for Nickname & Avatar.
##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<ruby>**[**&#xA0;&#xA0;**]**<rt>**???**</rt></ruby> Auto-moderation: automatic filtering of phone numbers, e-mail addresses, social networks'&messengers' as well as some of the general external links (with optional substitution with the links to relevant app users' accounts and/or resources if filtered content matches contacts of a registered user.
##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<ruby>**[**&#xA0;&#xA0;**]**<rt>**???**</rt></ruby> Filtering/substituting all links, local to the app, for our URI scheme, recogniseable by the app (with AppStore/Playmarket opening if the app is not installed).
##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** Standard messenger feature set:
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** Emoji options,as provided by the system,
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** Message deletion (for oneself and/or all parties involved) (probably no real need for message editing...),
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** File/picture attachment (???... within limits..),
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** Group chats,
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** Notification options as provided by the system (app-wide, customised per user),
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** Apps' own contacts list,
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** Broadcasts (available to admins only),
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** Polls & similar attractions,
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** Avatars,
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** User-defined statii, 
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** System-awarded statii,
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** Visibility/availability settings,
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** User-defined privacy settings (even within the already limited apps' scope),
###### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** Default contacts (web/app support, <ruby>sales manager<rt>(optional)</rt></ruby>, general sales-related support, product experts/consultants et al.).

#### <ins>Technologies:</ins>
##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** 
##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** 
##### &#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;**[**&#xA0;&#xA0;**]** 

[comment]: # (N.B.! Custom ToDo lists' nesting levels are marked as follows:   )

[comment]: # (level 1: #### ...                                                )

[comment]: # (level 2: ##### 6x[&#xA0;]...                                     )

[comment]: # (level 3: ###### 12x[&#xA0;]...                                   )

[comment]: # (level 4: ###### 18x[&#xA0;]<sub>**[**&#xA0;&#xA0;**]** ...</sub> )

[comment]: # (Items end only either in ":", "," or ".".                        )
