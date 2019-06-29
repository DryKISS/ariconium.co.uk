##
# Middleman Configuration File
#
# @author Ian Warner <ian.warner@drykiss.com>
##

# Data Variables
set :dataConfig,    data.config
set :dataApple,     data.apple
set :dataFacebook,  data.facebook
set :dataFormSpree, data.formSpree
set :dataGoogle,    data.google
set :dataNav,       data.navigation
set :version,       dataConfig.version

# Config
config[ :partials_dir ] = "partial/_library/"

# Variables
# set :relative_links,   false
# set :strip_index_file, false
set :syntaxScheme,     "ThankfulEyes"
set :path,             "assets"
set :css_dir,          "#{ path }/stylesheets"
set :js_dir,           "#{ path }/javascripts"
set :images_dir,       "#{ path }/images"
set :index_file,       "index.html"
set :fonts_dir,        "#{ path }/font"
set :haml,             { ugly: true, format: :html5 }
set :build_dir,        "www"
set :layout,           "_library/fullWidth"
set :debug_assets,     true

# Markdown Engine
set :markdown_engine, :kramdown
set :markdown, layout_engine: :haml, tables: true, autolink: true, smartypants: true

# Syntax Highlighting
activate :syntax

# Time Zone
Time.zone = "Europe/London"

# I18n
# @see http://www.rubydoc.info/github/svenfuchs/i18n/I18n
activate :i18n do | options |
    options.langs         = [ :en ]
    options.mount_at_root = :en
end

# Live reload
activate :livereload

# Global Layout Selection
page "atom.xml",     layout: false
page "channel.html", layout: false
page "config.xml",   layout: false
page "feed.xml",     layout: false
page "runner.html",  layout: false
page "sitemap.xml",  layout: false

# Remove 404 from directory indexes
page "/404.html", :directory_index => false

# Sprockets
after_configuration do
    sprockets.append_path File.join "#{ root }", "bower_components"
    sprockets.append_path File.join "#{ root }", "bower_components/bootstrap-sass-official/assets/javascripts/"
    sprockets.append_path File.join "#{ root }", "bower_components/bootstrap-sass-official/assets/stylesheets/"
    sprockets.append_path File.join "#{ root }", "bower_components/font-awesome/scss/"
    sprockets.append_path File.join "#{ root }", "source/partial/_library/"
    sprockets.append_path "/assets/font"
end

# Middleman Deploy
activate :deploy do | deploy |
    deploy.method       = :git
    deploy.remote       = 'git@github.com:DryKISS/ariconium.co.uk.git'
    deploy.build_before = true
end

# Directory Indexes
activate :directory_indexes

# Build-specific configuration
configure :build do

    # Use relative URLs
    activate :relative_assets

    # For example, change the Compass output style for deployment
    activate :minify_css

    # Minify Javascript on build
    activate :minify_javascript

    # Minify HTML
    activate :minify_html

    # # Favicon
    # activate :favicon_maker, icons: {
    #     "favicon_template.png" => [
    #         { icon: "favicon.png", size: "32x32" },
    #         { icon: "favicon.ico", size: "64x64,32x32,24x24,16x16" },
    #     ]
    # }

end