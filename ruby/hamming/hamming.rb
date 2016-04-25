class Hamming
  Hamming::VERSION = 1

  def self.compute(src, dest)
    raise ArgumentError if src.length != dest.length

    hamming_number = 0
    src.split('').each_with_index do |char, i|
    hamming_number += 1  if char != dest[i]
    end
    hamming_number

  end
end
