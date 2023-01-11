package com.lithan.kyn.service;

import java.util.Arrays;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lithan.kyn.entity.ERole;
import com.lithan.kyn.entity.Roles;
import com.lithan.kyn.entity.UserAccount;
import com.lithan.kyn.model.EditProfileDto;
import com.lithan.kyn.model.UserDto;
import com.lithan.kyn.repository.RolesRepository;
import com.lithan.kyn.repository.UserAccountRepository;

@Service
public class UserServiceImpl implements UserService {

  @Autowired
  private UserAccountRepository userRepo;

  @Autowired
  private RolesRepository rolesRepo;

  @Override
  public Roles createRole(ERole roleName) {
    Roles role = new Roles();
    role.setName(roleName);
    return rolesRepo.save(role);
  }

  @Override
  public UserAccount findByEmail(String email) {
    return userRepo.findByEmail(email).get();
  }

  @Override
  public UserAccount getById(int userId) {
    UserAccount user = userRepo.findById(userId).get();

    return user;
  }

  @Override
  public UserAccount editProfile(EditProfileDto editProfileDto) {
    UserAccount user = getById(editProfileDto.getUserId());

    user.setName(editProfileDto.getName());
    user.setAddress(editProfileDto.getAddress());
    user.setPhoneNumber(editProfileDto.getPhoneNumber());

    return userRepo.save(user);
  }

  @Override
  public List<UserDto> listUser() {
    ModelMapper modelMapper = new ModelMapper();

    List<UserAccount> users = userRepo.findAll();
    List<UserDto> listUser = Arrays.asList(modelMapper.map(users, UserDto[].class));
    return listUser;
  }

}
