module ApplicationHelper
  def body_id
    [controller_name, action_name].join('-')
  end
end

