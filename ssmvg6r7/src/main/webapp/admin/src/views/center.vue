<template>
  <div>
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      label-width="80px"
    >  
     <el-row>
      <el-col :span="12">
        <el-form-item   v-if="flag=='yewuyuan'"  label="业务员账号" prop="yewuyuanzhanghao">
          <el-input v-model="ruleForm.yewuyuanzhanghao" readonly              placeholder="业务员账号" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='yewuyuan'"  label="业务员姓名" prop="yewuyuanxingming">
          <el-input v-model="ruleForm.yewuyuanxingming"               placeholder="业务员姓名" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='yewuyuan'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie" placeholder="请选择性别">
            <el-option
                v-for="(item,index) in yewuyuanxingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item  v-if="flag=='yewuyuan'" label="入职时间" prop="ruzhishijian">
            <el-date-picker
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                v-model="ruleForm.ruzhishijian" 
                type="date"
                placeholder="入职时间">
            </el-date-picker> 
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item  v-if="flag=='yewuyuan'" label="出生日期" prop="chushengriqi">
            <el-date-picker
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                v-model="ruleForm.chushengriqi" 
                type="date"
                placeholder="出生日期">
            </el-date-picker> 
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='yewuyuan'"  label="联系手机" prop="lianxishouji">
          <el-input v-model="ruleForm.lianxishouji"               placeholder="联系手机" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">  
        <el-form-item v-if="flag=='yewuyuan'" label="个人相片" prop="gerenxiangpian">
          <file-upload
          tip="点击上传个人相片"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.gerenxiangpian?ruleForm.gerenxiangpian:''"
          @change="yewuyuangerenxiangpianUploadChange"
          ></file-upload>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='yuangong'"  label="员工工号" prop="yuangonggonghao">
          <el-input v-model="ruleForm.yuangonggonghao" readonly              placeholder="员工工号" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='yuangong'"  label="员工姓名" prop="yuangongxingming">
          <el-input v-model="ruleForm.yuangongxingming"               placeholder="员工姓名" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='yuangong'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie" placeholder="请选择性别">
            <el-option
                v-for="(item,index) in yuangongxingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='yuangong'"  label="公司名称" prop="gongsimingcheng">
          <el-input v-model="ruleForm.gongsimingcheng"               placeholder="公司名称" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item  v-if="flag=='yuangong'" label="入职时间" prop="ruzhishijian">
            <el-date-picker
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                v-model="ruleForm.ruzhishijian" 
                type="date"
                placeholder="入职时间">
            </el-date-picker> 
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item  v-if="flag=='yuangong'" label="出生日期" prop="chushengriqi">
            <el-date-picker
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                v-model="ruleForm.chushengriqi" 
                type="date"
                placeholder="出生日期">
            </el-date-picker> 
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='yuangong'"  label="联系手机" prop="lianxishouji">
          <el-input v-model="ruleForm.lianxishouji"               placeholder="联系手机" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">  
        <el-form-item v-if="flag=='yuangong'" label="个人相片" prop="gerenxiangpian">
          <file-upload
          tip="点击上传个人相片"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.gerenxiangpian?ruleForm.gerenxiangpian:''"
          @change="yuangonggerenxiangpianUploadChange"
          ></file-upload>
        </el-form-item>
      </el-col>
      <el-form-item v-if="flag=='users'" label="用户名" prop="username">
        <el-input v-model="ruleForm.username" 
        placeholder="用户名"></el-input>
      </el-form-item>
      <el-col :span="24">
      <el-form-item>
        <el-button type="primary" @click="onUpdateHandler">修 改</el-button>
      </el-form-item>
      </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isMobile,isPhone,isURL,checkIdCard } from "@/utils/validate";

export default {
  data() {
    return {
      ruleForm: {},
      flag: '',
      usersFlag: false,
      yewuyuanxingbieOptions: [],
      yuangongxingbieOptions: [],
    };
  },
  mounted() {
    var table = this.$storage.get("sessionTable");
    this.flag = table;
    this.$http({
      url: `${this.$storage.get("sessionTable")}/session`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.ruleForm = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.yewuyuanxingbieOptions = "男,女".split(',')
    this.yuangongxingbieOptions = "男,女".split(',')
  },
  methods: {
    yewuyuangerenxiangpianUploadChange(fileUrls) {
        this.ruleForm.gerenxiangpian = fileUrls;
    },
    yuangonggerenxiangpianUploadChange(fileUrls) {
        this.ruleForm.gerenxiangpian = fileUrls;
    },
    onUpdateHandler() {
      if((!this.ruleForm.yewuyuanzhanghao)&& 'yewuyuan'==this.flag){
        this.$message.error('业务员账号不能为空');
        return
      }
      if((!this.ruleForm.mima)&& 'yewuyuan'==this.flag){
        this.$message.error('密码不能为空');
        return
      }
      if( 'yewuyuan' ==this.flag && this.ruleForm.lianxishouji&&(!isMobile(this.ruleForm.lianxishouji))){
        this.$message.error(`联系手机应输入手机格式`);
        return
      }
      if((!this.ruleForm.yuangonggonghao)&& 'yuangong'==this.flag){
        this.$message.error('员工工号不能为空');
        return
      }
      if((!this.ruleForm.mima)&& 'yuangong'==this.flag){
        this.$message.error('密码不能为空');
        return
      }
      if( 'yuangong' ==this.flag && this.ruleForm.lianxishouji&&(!isMobile(this.ruleForm.lianxishouji))){
        this.$message.error(`联系手机应输入手机格式`);
        return
      }
      if('users'==this.flag && this.ruleForm.username.trim().length<1) {
	this.$message.error(`用户名不能为空`);
        return	
      }
      this.$http({
        url: `${this.$storage.get("sessionTable")}/update`,
        method: "post",
        data: this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "修改信息成功",
            type: "success",
            duration: 1500,
            onClose: () => {
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
