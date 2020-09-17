# // 1. Write a function which takes a list of numbers and returns the length of the
# // longest continuous stretch of a single number. For example, on the input [1,7,7,3],
# // the correct return is 2, because there are two 7’;s in a row. On the input
# // [1,7,7,3,9,9,9,4,9], the correct return is 3, since there are three 9’s in a row.

require 'pry'

array = [1,7,7,3]
array2 = [1,3,7,7,3,9,9,9,4,3]

def longest_continuous_stretch (array)
  longest_count = 1
  count = 1
  array.each_cons(2) do |a, b|
    if a == b
      count += 1
      longest_count = count if count > longest_count
    else
      count = 1
    end
  end
  return longest_count
end

longest_continuous_stretch(array2)