# Project : Ariconium.co.uk

# Links

    http://www.agronomics-trading.com/

# Invoice

    Ariconium Limited
    Hawthorne House
    Hawthorne Lane
    Ross-on-Wye
    Herefordshire
    HR9 5BG

# Domain

    Bought at Enom

    Email
    https://support.office.com/en-us/article/Create-DNS-records-at-eNomCentral-for-Office-365-a6626053-a9c8-445b-81ee-eeb6672fae77#BKMK_add_MX

    Set up via Zoho - Forwarded to Outlook

# Middleman : http://middlemanapp.com/

    Start
    $ /var/www/ariconium
    $ bundle exec middleman server

    Variables
    http://localhost:4567/__middleman

    Kill
    $ ps aux | grep middleman
    $ sudo kill -9

    Template install
    $ middleman init -T tdreyno/my-middleman-starter ~/Sites/new-site

# BitBucket : http://bitbucket.com - Used for private source code

    Repositories
    $ curl --user DryKISS:Password https://api.bitbucket.org/1.0/user/repositories

    Create Repository
    $ curl -X POST -v -u DryKISS:Password -H "Content-Type: application/json" https://api.bitbucket.org/2.0/repositories/DryKISS/ariconium.co.uk -d '{"scm": "git", "is_private": "true", "fork_policy": "no_public_forks" }'

    Initialise
    $ git init

    Add Origin
    $ git remote add origin git@bitbucket.org:DryKISS/ariconium.co.uk.git
    $ git push -u origin --all
    $ git push -u origin --tags

    Add Origin
    $ git remote -v
    $ git remote add bitbucket git@bitbucket.org:DryKISS/ariconium.co.uk.git

# GitHub : http://github.com

    Test DNS
    $ dig ariconium.co.uk | grep -E '(207.97.227.245|204.232.175.78|199.27.73.133)' || echo "OK"

# Bundler : http://bundler.io/

    This must be installed, it manages the projects required Gems.
    $ gem install bundler
    $ bundle install

# Bower : http://bower.io/

    This must be installed, it manages the projects front end dependencies. To install
    this Node must be installed : http://nodejs.org/ use the binary.
    $ npm install -g bower

    Initially you will want to install the bower components
    $ bower install

    Updating can be dangerous and it may update packages that could break features
    $ bower update
    $ bower prune

# Thor : http://whatisthor.com/

# File System

    Delete SVN directories
    $ find . -name .svn -exec echo {} \;
    $ find . -name .svn -exec rm -rf {} \;

    Delete GIT directories
    $ find . -name .git -exec echo {} \;
    $ find . -name .git -exec rm -rf {} \;

    Delete Windows Thumbs
    $ find . -name Thumbs.db -exec echo {} \;
    $ find . -name Thumbs.db -exec rm -rf {} \;

    Google Icon
    $ find ~/Google\ Drive/ -name Icon? -exec rm -f {} \;
