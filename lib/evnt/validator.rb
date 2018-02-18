# frozen_string_literal: true

module Evnt

  ##
  # Validator is a class used to validates params and attributes automatically.
  ##
  class Validator

    attr_reader :value

    TYPES = %i[boolean string integer symbol float hash array
               date datetime time].freeze

    ##
    # The constructor is used to initialize a new validator.
    #
    # ==== Attributes
    #
    # * +value+ - The value that should be validated.
    # * +options+ - The list of options for the validation.
    #
    # ==== Options
    #
    # * +presence+ - Boolean value used to not accept nil values.
    # * +type+ - Symbol or String value used to set the type of the value.
    # * +custom_options+ - Other options that can change for every type.
    ##
    def initialize(value, options)
      @value = value

      @_options = options
      @_result = true

      _validates_presence if @_result
      _validates_type if @_result
      _validates_custom if @_result
    end

    ##
    # This function tells if the validation is passed or not.
    ##
    def passed?
      @_result
    end

    private

    def _validates_presence
      return if @_options[:presence].nil?
      @_result = @_options[:presence] ? !@value.nil? : @value.nil?
    end

    def _validates_type
      return if @value.nil? || @_options[:type].nil?

      if @_options[:type].instance_of?(Symbol) && TYPES.include?(@_options[:type])
        send("_validates_type_#{@_options[:type]}")
      elsif @_options[:type].instance_of?(String)
        _validates_type_custom
      else
        raise 'Validator type option not accepted'
      end
    end

    def _validates_custom
      case @_options[:type]
      when :string
        _validates_string_blank if @_result
        _validates_string_length if @_result
        _validates_string_max_length if @result
      end
    end

    # Types validations:
    ##########################################################################

    def _validates_type_custom
      @_result = @value.instance_of?(Object.const_get(@_options[:type]))
    end

    def _validates_type_symbol
      @_result = @value.instance_of?(Symbol)
    end

    def _validates_type_hash
      @_result = @value.instance_of?(Hash)
    end

    def _validates_type_array
      @_result = @value.instance_of?(Array)
    end

    def _validates_type_boolean
      return if @value.instance_of?(TrueClass) || @value.instance_of?(FalseClass)

      @value = true && return if [1, 'true'].include?(@value)
      @value = false && return if [0, 'false'].include?(@value)

      @_result = false
    end

    def _validates_type_integer
      return if @value.instance_of?(Integer)
      @value = @value.to_i
    rescue StandardError
      @_result = false
    end

    def _validates_type_float
      return if @value.instance_of?(Float)
      @value = @value.to_f
    rescue StandardError
      @_result = false
    end

    def _validates_type_string
      return if @value.instance_of?(String)
      @value = @value.to_s
    rescue StandardError
      @_result = false
    end

    def _validates_type_date
      return if @value.instance_of?(Date)
      @value = Date.parse(@value)
    rescue StandardError
      @_result = false
    end

    def _validates_type_datetime
      return if @value.instance_of?(DateTime)
      @value = DateTime.parse(@value)
    rescue StandardError
      @_result = false
    end

    def _validates_type_time
      return if @value.instance_of?(Time)
      @value = Time.parse(@value)
    rescue StandardError
      @_result = false
    end

    # String validations:
    ##########################################################################

    def _validates_string_blank
      return if @_options[:blank].nil?
      blank = (!@value || @value.empty?)
      @_result = @_options[:blank] ? blank : !blank
    end

    def _validates_string_length
      return if @_options[:length].nil?
      @_result = @value.length == @_options[:length]
    end

    def _validates_string_min_length
      return if @_options[:min_length].nil?
      @_result = @value.length >= @_options[:min_length]
    end

    def _validates_string_max_length
      return if @_options[:max_length].nil?
      @_result = @value.length <= @_options[:max_length]
    end

  end

end
