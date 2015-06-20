#
# Copyright (c) 2008-2015 the Urho3D project.
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.
#

# Usage: rake release tag="1.xx" [date="2012-02-09"]
desc "Begin a new release in #{CONFIG['posts']}"
task :release do
  abort("rake aborted: '#{CONFIG['posts']}' directory not found.") unless FileTest.directory?(CONFIG['posts'])
  abort('Usage: rake release tag="1.xx" [date="2012-02-09"]') unless ENV['tag']
  title = ENV['tag']
  tags = "[#{ENV['tag']}]"
  category = 'releases'
  slug = "urho3d-#{ENV['tag']}-release"
  begin
    date = (ENV['date'] ? Time.parse(ENV['date']) : Time.now).strftime('%Y-%m-%d')
  rescue => e
    puts "Error - date format must be YYYY-MM-DD, please check you typed it correctly!"
    exit -1
  end
  filename = File.join(CONFIG['posts'], "#{date}-#{slug}.#{CONFIG['post_ext']}")
  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end

  puts "Creating new release: #{filename}"
  open(filename, 'w') do |post|
    post.puts '---'
    post.puts 'layout: post'
    post.puts "title: Urho3D #{ENV['tag']} release"
    post.puts "category: #{category}"
    post.puts 'caroursel_background:'
    post.puts "tags: #{tags}"
    post.puts 'excluded_artifacts:'
    post.puts '---'
    post.puts '{% include JB/setup %}'
    post.puts '{% include custom/release_artifacts %}'
    post.puts ''
    post.puts '### Changelog'
    post.puts '- unodered list 1'
    post.puts '- unodered list 2'
  end
end # task :release

# Usage: rake lessc [main|doxygen|all]
desc "Compile all less files for main, doxygen, or all (default)"
task :lessc do
  option = ARGV.last
  if option == 'lessc'
    option = 'all'
  end
  task option.to_sym do ; end   # No-op hack
  if option == 'main' || option == 'all'
    system 'lessc assets/themes/minimal/_less/main.less -x --clean-css >assets/themes/minimal/css/main-min.css' or abort 'Failed to compile main.less'
  end
  if option == 'doxygen' || option == 'all'
    system 'lessc _includes/Doxygen/doxygen.less -x --clean-css >_includes/Doxygen/minimal-doxygen.css && echo >>_includes/Doxygen/minimal-doxygen.css' or abort 'Failed to compile doxygen.less'
  end
end # task :lessc
