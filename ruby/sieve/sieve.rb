class Sieve

  def initialize(max_num)
    @max_num = max_num
  end

  def primes
    @primes ||= discover_primes
  end

  def discover_primes
    all_numbers = (2..@max_num).to_a
    all_numbers.each_with_object([]) do |current_number, numbers|
      numbers << current_number
      all_numbers.reject! { |number| number % current_number == 0 && number > current_number  }
    end
  end

end
