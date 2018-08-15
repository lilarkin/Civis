source 'https://rubygems.org'
ruby '2.5.0'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.0.2'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.0'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'jquery-rails'
gem 'jbuilder', '~> 2.5'
gem 'repack', '2.4.2'
gem 'materialize-sass', '~> 0.98.0'
gem 'httparty', '~> 0.14.0'
gem 'font-awesome-rails', '~> 4.7.0.1'
gem 'twitter', '~> 6.1.0'
gem 'faker', '~> 1.7.3'
gem 'wikipedia-client', '~>1.6.3'

group :development, :test do
  gem 'pry'
  gem 'rspec-rails'
  gem 'simplecov'
  gem 'factory_girl_rails'
  gem 'rails-controller-testing'
  gem 'shoulda-matchers'
  gem 'database_cleaner'
  gem 'dotenv-rails'
  gem 'annotate'
  gem 'capybara'
  gem 'selenium-webdriver'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

gem 'devise'
