require 'pry'

def merge_ranges(meetings)
    # Sort the Meetings
    sorted_meetings = meetings.sort
    # Initialize with the Earliest Meeting
    merged_meetings = [sorted_meetings[0]]
    sorted_meetings[1..-1].each do |current_meeting_start, current_meeting_end|
      last_merged_meeting_start, last_merged_meeting_end = merged_meetings[-1]
      # If the current meeting overlaps with the last merged meeting, use the
      # later end time of the two
      if current_meeting_start <= last_merged_meeting_end
        merged_meetings[-1] = [last_merged_meeting_start, [last_merged_meeting_end, current_meeting_end].max ]
      end
      binding.pry

    end
end

meetings = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
merge_ranges(meetings)

# if current_meeting_start <= last_merged_meeting_end
#   merged_meetings[-1] = [
#     last_merged_meeting_start, 
#     [last_merged_meeting_end, current_meeting_end].max
#     ]
# else