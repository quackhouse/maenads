class AdminsController < ApplicationController
  # GET /admins
  # GET /admins.json
  def index
    @admins = Admin.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @admins }
    end
  end

  def login
    if session[:admin] == true
      redirect_to('/admins')
    end
  end

  def admin_create
    username = params[:username]
    password = params[:password]
    @admin = Admin.where(username: username).first
    if @admin && @admin.authenticate(password)
      session[:admin] = true
      redirect_to('/admins')
    else
      flash[:notice] = "Incorrect password"
      render :login
    end
  end

  def logout
    session[:admin] = false
    redirect_to('/')
  end
end
