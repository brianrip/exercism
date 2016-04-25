class Complement
  Complement::VERSION = 3

  def self.of_dna(dna)
    strand_validation(dna)
    rna = ""
    dna.chars.map do |char|
      rna << char.tr('GCTA', 'CGAU')
    end
      rna
  end

  def self.strand_validation(dna)
    validation = dna.gsub(/[GCTA]/, "")
    raise ArgumentError if !validation.empty?
  end

end
