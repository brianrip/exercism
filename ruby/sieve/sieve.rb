class Sieve

  def initialize(max_num)
    @max_num = max_num
  end

  def primes
    @primes ||= discover_primes
  end

  def discover_primes
    all_numbers = (2..@max_num).to_a
    all_numbers.map do |current_number|
      all_numbers.reject! { |number| number % current_number == 0 && number > current_number  }
    end
    all_numbers
  end

end
