#!/usr/local/bin/ruby -w

counter = 1
while counter <= 100 do
    puts counter if (counter % 2 == 0)
    counter = counter + 1
end

print "Done"