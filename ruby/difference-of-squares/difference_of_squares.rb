class Squares
  Squares::VERSION = 2

  attr_reader :n

  def initialize(n)
    @n = n
  end

  def square_of_sum
    if n == 0
      0
    else
    (1..n).reduce(:+) ** 2
    end
  end

  def sum_of_squares
    if n == 0
      0
    else
    (1..n).map { |n| n ** 2 }.reduce(:+)
    end
  end

  def difference
    square_of_sum - sum_of_squares
  end
end
